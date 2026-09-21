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

// 修复2（核心）：App Group容器返回nil时，重定向到应用沙盒目录
- (NSURL *)containerURLForSecurityApplicationGroupIdentifier:(NSString *)groupIdentifier {
    NSURL *url = %orig(groupIdentifier);
    if (!url) {
        // 侧载应用无App Group权限，重定向到应用沙盒Library目录
        NSURL *libraryURL = [[NSFileManager defaultManager] URLForDirectory:NSLibraryDirectory
                                                                       inDomain:NSUserDomainMask
                                                              appropriateForURL:nil
                                                                         create:YES
                                                                          error:nil];
        url = [libraryURL URLByAppendingPathComponent:@"AppGroup" isDirectory:YES];
        // 确保目录存在
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
