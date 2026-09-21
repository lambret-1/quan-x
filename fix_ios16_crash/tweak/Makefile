ARCHS = arm64
TARGET = iphone:clang:latest:15.0
INSTALL_TARGET_PROCESSES = Quantumult X

include $(THEOS)/makefiles/common.mk

TWEAK_NAME = QXFix
QXFix_FILES = Tweak.xm
QXFix_CFLAGS = -fobjc-arc

include $(THEOS_MAKE_PATH)/tweak.mk
