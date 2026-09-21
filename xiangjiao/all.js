[rewrite_local]
^https?:\/\/wx\.10086\.cn\/qwhdhub\/ url script-request-header https://raw.githubusercontent.com/lambret-1/quan-x/main/xiangjiao/ad.js
[MITM]
hostname = %APPEND% wx.10086.cn