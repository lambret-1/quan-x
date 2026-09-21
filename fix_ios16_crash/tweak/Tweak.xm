#import <Foundation/Foundation.h>

// 判断当前是否为主应用进程（非Network Extension）
static BOOL isMainAppProcess() {
    static BOOL result = NO;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        NSString *executableName = [[NSBundle mainBundle] executablePath]?.lastPathComponent;
        // 主应用可执行文件名为 "Quantumult X"
        // Network Extension 通常为 "PacketTunnel" 或类似名称
        if ([executableName isEqualToString:@"Quantumult X"]) {
            result = YES;
        }
        // 额外检查：Network Extension 的 bundle path 通常包含 .appex
        NSString *bundlePath = [[NSBundle mainBundle] bundlePath];
        if ([bundlePath containsString:@".appex"]) {
            result = NO;
        }
    });
    return result;
}

%hook NSFileManager

// 修复1：contentsOfDirectoryAtURL nil URL保护
- (NSArray *)contentsOfDirectoryAtURL:(NSURL *)url
              includingPropertiesForKeys:(NSArray *)keys
                                 options:(NSDirectoryEnumerationOptions)mask
                                   error:(NSError **)error {
    if (!url) {
        return @[];
    }
    return %orig(url, keys, mask, error);
}

// 修复2（核心）：App Group容器重定向（仅主应用进程）
- (NSURL *)containerURLForSecurityApplicationGroupIdentifier:(NSString *)groupIdentifier {
    NSURL *url = %orig(groupIdentifier);
    
    // 仅在主应用进程中重定向，Network Extension 进程保持原样
    if (!url && isMainAppProcess()) {
        NSURL *libraryURL = [[NSFileManager defaultManager] URLForDirectory:NSLibraryDirectory
                                                                       inDomain:NSUserDomainMask
                                                              appropriateForURL:nil
                                                                         create:YES
                                                                          error:nil];
        url = [libraryURL URLByAppendingPathComponent:@"AppGroup" isDirectory:YES];
        [[NSFileManager defaultManager] createDirectoryAtURL:url
                                   withIntermediateDirectories:YES
                                                    attributes:nil
                                                         error:nil];
    }
    return url;
}

%end

%hook NSURL

// 修复3：fileURLWithPath nil路径保护
+ (NSURL *)fileURLWithPath:(NSString *)path {
    if (!path) {
        return nil;
    }
    return %orig(path);
}

+ (NSURL *)fileURLWithPath:(NSString *)path isDirectory:(BOOL)isDir {
    if (!path) {
        return nil;
    }
    return %orig(path, isDir);
}

%end
