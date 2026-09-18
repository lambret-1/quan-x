> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite.md).

# 重写（rewrite）

## 原理简述

QX这类的代理类App，核心能力是四项：

* 接管：可以将设备发出的网络连接进行接管，QX采用虚拟网卡（TUN模式）接管
* 处理：可以对被接管的网络请求和响应进行修改。包括 URL 重定向、本地文件映射、使用 JavaScript 自定义修改等多种方式。
* 转发：可以将被接管的网络请求转发给其他代理服务器。可以是全局转发，也可以按照非常灵活的规则系统确定出口策略。
* 截获：可以截获并保存网络请求和响应的具体数据，同时可对 HTTPS 加密流量进行 MITM 解密。

重写就是当中的处理这一部分。

{% hint style="danger" %}
使用重写功能，需要在[设置页面](/shi-yong-fang-fa/jie-mian-cao-zuo/she-zhi-ye-mian.md)中开启。
{% endhint %}

目前 QX 提供的修改能力包括（rewrite）：

&#x20;• 重定向（302，307，request-header， request-body，script-request-header，script-request-body，其中，重定向主机仅可使用302，307，不支持直接修改url重定向主机）

&#x20;• 本地文件映射（echo-resonse，script-echo-response，script-analyze-echo-response）

&#x20;• 请求头和响应头修改（request-header，response-header）

&#x20;• JavaScript 脚本修改

其中脚本修改的功能最为强大，可通过脚本间接实现其他几项能力。但是由于脚本编写繁琐，运行时开销略大，简单需求还是应该通过其他方式实现。

同时因为处理只能对HTTP流量进行处理，所以其中一些HTTPS需要对其mitm解密后才能进行处理，所以重写这部分和mitm的联系是很紧密的。

{% hint style="info" %}
开启mitm见之前的[mitm章节](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/mitm.md)
{% endhint %}

当前QX支持的重写有如下类型：

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FWr6sAVt8qPEgdAokIvRU%2FIMG_6261.jpeg?alt=media&amp;token=3d0daa99-5dec-4635-b1b8-d8a64570267d" alt=""><figcaption><p>QX的重写类型</p></figcaption></figure>

简单讲解一下重写类型含义

* **reject**：对正则匹配的URL返回404状态(*returns HTTP status code 404 with no content*)
* **reject-img**：对正则匹配的URL返回HTTP 200响应和1像素的gif（*returns HTTP status code 200 with content of 1px gif*）
* **reject-dict**：对正则匹配的URL返回空JSON对象的和HTTP 200响应（*returns HTTP status code 200 with content of empty json object*）
* **reject-array**：对正则匹配的URL返回空JSON数组的HTTP 200响应 （*returns HTTP status code 200 with content of empty json array*）
* **reject-200**：对正则匹配的URL返回空响应体的HTTP响应（*returns HTTP status code 200 with no content*）
* **302**：对正则匹配的URL，会将POST请求改成GET,不保留请求体
* **307**：对正则匹配的URL，将POST重定向到POST,PUT重定向到PUT，会保留请求体
* **request-header**：请求头，通过正则可以匹配多个连续的请求头,实现基于多个头信息进行规则匹配修改请求头。(*The "request-header" works for all the http headers not just one single header, so you can match two or more headers including CRLF in one regular expression.)*
* **request-body**：通过正则匹配URL修改请求体
* **response-header、response-body**：通过正则匹配URL修改响应头、响应体
* **echo-response**：通过正则匹配URL直接返回响应体内容，可用于直接返回原始响应、构造自定义响应、调试及占位等用途，这是一种返回静态数据的mock方法
* **script-analyze-echo-response、script-echo-response**：对正则匹配的URL返回一个通过脚本script的方式处理过的由用户自定义的响应体，区别是*script-analyze-echo-response*同时**包含全部$request数据，**&#x6BD4;如BoxJs 、SubStore 均使用此方式工作；*script-echo-response***不包含全部$request数据** 一般用来返回由用户自行构造的响应数据 功能近似于Mock。
* **script-request-header、script-request-body、script-response-header、script-response-body**：分别是通过脚本（script）的方式对正则匹配的URL返回的请求头、请求体、响应头、响应体进行处理，并返回经过脚本处理后的相应内容。

{% hint style="warning" %}
script-echo-response 和script-response-body区别是前者是返回一个由用户完全虚构的响应，后者是返回一个修改过的收到的真实响应。<br>
{% endhint %}

### 脚本存放位置

{% hint style="warning" %}
脚本的保存位置：

1.可以放 github 后， 远程使用对应链接（raw 链接）

2.也可以放本地的 My iPhone - Quantumult X - Scripts 文件夹

3.如果QX的其它设置中资源中iCloud云盘开关打卡的话，则是在iCloud Drive - Quantumult X - Scrips文件夹
{% endhint %}

### 补充一点官方文档说明

> `如果”rewrite”与响应体相关,长度和编码相关的 HTTP 头字段会由 Quantumult 自动处理,所以你不需要自行处理。对 response-body 和 script-response-body 支持的最大响应大小是 1024kB(解压后)`
>
> `如果响应体为空,与响应体相关的 rewrite 将不会被执行`
>
> `在重写规则中使用javascript时,你可以使用这些对象:$request、$response、$notify(标题,副标题,消息)、console.log(消息)和Quantumult内置的对象都有”$“前缀。`
>
> `支持:$request.scheme、$request.method、$request.url、$request.path、$request.headers、$response.statusCode、$response.headers、$response.body`
>
> `$notify(标题,副标题,消息)会在启用了Quantumult通知时发出iOS通知。`
>
> `$prefs用于持久化存储:$prefs.valueForKey(键)、$prefs.setValueForKey(值,键)、$prefs.removeValueForKey(键)、$prefs.removeAllValues()。`
>
> `console.log(消息)会在日志级别为“debug”时输出日志到Quantumult日志文件。`
>
> `setTimeout(函数(){ },间隔)会在间隔(毫秒)后运行函数。`

重写按加载顺序进行匹配，与分流规则类似同样存在优先级⁠，本地>远程，上面的>下面的规则。可以点击“重写规则”查看加载顺序。&#x20;

根据以上对重写类型的介绍可以看出，重写一般较多的用来去广告，通过脚本进行 app 的签到以及 app 的内购破解等。 重写和分流一样，分为[本地重写\[rewrite\_local\]](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite/rewrite_local.md)和[远程重写资源\[rewrite\_remote\]](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite/rewrite_remote.md)两种。

{% hint style="warning" %}
新人建议使用[远程重写资源](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite/rewrite_remote.md)的方式，不建议使用本地重写。
{% endhint %}
