#!/bin/bash
set -e

IPA="$1"
if [ -z "$IPA" ] || [ ! -f "$IPA" ]; then
    echo "用法: $0 <QuantumultX.ipa>"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WORKDIR=$(mktemp -d)
trap "rm -rf $WORKDIR" EXIT

echo "[1/5] 解压 IPA..."
unzip -q "$IPA" -d "$WORKDIR"
APP="$WORKDIR/Payload/Quantumult X.app"

echo "[2/5] 编译 Tweak..."
cd "$SCRIPT_DIR/tweak"
make clean package FINAL=1 2>&1 | tail -3
DEB=$(ls ./packages/*.deb | head -1)
EXTRACT_DIR="$WORKDIR/tweak_extract"
mkdir -p "$EXTRACT_DIR"
dpkg-deb -x "$DEB" "$EXTRACT_DIR"
DYLIB=$(find "$EXTRACT_DIR" -name "*.dylib" | head -1)
echo "  dylib: $DYLIB"

echo "[3/5] 复制 dylib 到 App Bundle..."
cp "$DYLIB" "$APP/QXFix.dylib"

echo "[4/5] 注入加载命令..."
BINARY="$APP/Quantumult X"
if command -v optool &>/dev/null; then
    optool install -c load -p "@executable_path/QXFix.dylib" -t "$BINARY"
elif command -v insert_dylib &>/dev/null; then
    insert_dylib --inplace "@executable_path/QXFix.dylib" "$BINARY"
else
    echo "错误: 需要 optool 或 insert_dylib"
    echo "安装: brew install optool  (或) brew install insert_dylib"
    exit 1
fi

echo "[5/5] 重新打包..."
cd "$WORKDIR"
OUTPUT="/tmp/QuantumultX_1.5.0_iOS16_fixed.ipa"
zip -qr "$OUTPUT" Payload
echo ""
echo "修复完成!"
echo "输出: $OUTPUT"
echo "用 TrollStore / 全能签 / Sideloadly 重签后安装到 iOS16 设备"
