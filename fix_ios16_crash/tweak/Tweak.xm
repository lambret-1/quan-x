#import <Foundation/Foundation.h>

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

// 修复2：App Group容器重定向到当前进程沙盒（所有进程生效）
- (NSURL *)containerURLForSecurityApplicationGroupIdentifier:(NSString *)groupIdentifier {
    NSURL *url = %orig(groupIdentifier);
    if (!url) {
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

%hook NSUserDefaults

// 修复4：initWithSuiteName nil保护，避免App Group suite无法创建
- (instancetype)initWithSuiteName:(NSString *)suiteName {
    id result = %orig(suiteName);
    if (!result) {
        result = [NSUserDefaults standardUserDefaults];
    }
    return result;
}

%end
