#import <Foundation/Foundation.h>
#import <objc/runtime.h>

static SEL originalSel;
static SEL safeSel;

@implementation NSFileManager (QXFix)

+ (void)load {
    @autoreleasepool {
        originalSel = @selector(contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:);
        safeSel = @selector(qx_safe_contentsOfDirectoryAtURL:includingPropertiesForKeys:options:error:);
        
        Method origMethod = class_getInstanceMethod(self, originalSel);
        if (!origMethod) return;
        
        class_addMethod(self, safeSel,
                        (IMP)qx_safe_contentsOfDirectoryAtURL,
                        "@@:@@@Q@");
        
        Method safeMethod = class_getInstanceMethod(self, safeSel);
        method_exchangeImplementations(origMethod, safeMethod);
    }
}

NSArray *qx_safe_contentsOfDirectoryAtURL(id self, SEL _cmd,
                                            NSURL *url,
                                            NSArray *keys,
                                            NSDirectoryEnumerationOptions options,
                                            NSError **error) {
    if (!url) {
        return @[];
    }
    // 方法已交换，调用 safeSel 即调用原实现
    return ((NSArray *(*)(id, SEL, NSURL *, NSArray *, NSDirectoryEnumerationOptions, NSError **))
            objc_msgSend)(self, safeSel, url, keys, options, error);
}

@end
