# Quantumult X iOS16 闪退修复方案

## 问题描述
Quantumult X 1.5.0 (build 830) 在 iOS16.7.14 上启动即闪退，iOS14 正常。

## 崩溃根因
崩溃栈：
```
__exceptionPreprocess → objc_exception_throw
→ -[NSFileManager contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:]
→ 主程序代码
→ -[UIApplication _handleDelegateCallbacksWithOptions:...]
```

应用启动时调用 `+[NSFileManager defaultManager]` 的 `containerURLForSecurityApplicationGroupIdentifier:` 获取 App Group 共享容器 URL。侧载应用（无正确签名/entitlement）调用此方法返回 `nil`，应用未做 nil 检查，直接将 nil URL 传入 `contentsOfDirectoryAtURL:`，触发 `NSInvalidArgumentException` 未捕获异常 → `abort()`。

iOS14 对侧载应用的 App Group 访问容错更宽松（可能返回 App Bundle 内的目录），iOS16 严格返回 nil。

## 修复原理
通过 Theos 编译一个注入 dylib (`QXFix.dylib`)，在 `+load` 方法中 Method Swizzle `NSFileManager` 的 `contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:`：
- 当 URL 参数为 nil 时，直接返回空数组 `@[]`，不抛出异常
- URL 非 nil 时，调用原实现（方法已交换，通过替换 selector 调用原方法）

## 编译环境要求
- macOS 12+
- Xcode 13+（命令行工具）
- Theos（https://theos.dev/docs/installation-macos）
- optool 或 insert_dylib（`brew install optool`）

## 使用步骤

### 1. 安装 Theos
```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/theos/theos/master/bin/install-theos)"
export THEOS=~/theos
```

### 2. 编译并注入
```bash
cd fix_ios16_crash
./inject.sh /path/to/QuantumultX_1.5.0.ipa
```

### 3. 安装
修复后的 IPA 在 `/tmp/QuantumultX_1.5.0_iOS16_fixed.ipa`，用 TrollStore / 全能签 / Sideloadly 重签后安装到 iOS16 设备。

## 文件说明
- `tweak/Tweak.xm` — Swizzle 核心代码（Logos 语法）
- `tweak/Makefile` — Theos 编译配置
- `tweak/control` — Debian 包控制文件
- `inject.sh` — 一键编译+注入+重打包脚本

## 验证
安装后启动应用，如不再闪退即修复成功。可在设置中查看应用是否正常加载配置文件。

## 预编译 dylib 下载
已编译好的 `QXFix.dylib` 位于本目录，可直接下载使用，无需自行编译。

## 全能签注入方法
1. 下载 `QXFix.dylib` 和原始 `QuantumultX_1.5.0.ipa`
2. 打开全能签，选择原始 IPA
3. 在「注入 dylib」或「更多设置」中添加 `QXFix.dylib`
4. 注入路径选择 `@executable_path/QXFix.dylib`
5. 签名后安装到 iOS16 设备

## dylib 功能说明
- 在 `+load` 阶段自动 Swizzle `NSFileManager`
- 当 `contentsOfDirectoryAtURL:` 的 URL 参数为 nil 时，返回空数组 `@[]`
- 修复侧载应用因无 App Group 权限导致的启动闪退
