#import <Foundation/Foundation.h>

%hook NSFileManager

- (NSArray *)contentsOfDirectoryAtURL:(NSURL *)url
              includingPropertiesForKeys:(NSArray *)keys
                                 options:(NSDirectoryEnumerationOptions)mask
                                   error:(NSError **)error {
    if (!url) {
        return @[];
    }
    return %orig(url, keys, mask, error);
}

%end

%hook NSURL

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
