> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/tong-yong-she-zhi-general.md).

# 通用设置 \[general]

general 模块内为一些通用的设置参数项。

server\_check\_url= <http://www.qualcomm.cn/generate\\_204>

> Quantumult 使用 HTTP HEAD 方法对测试网址 server\_check\_url 进行网页响应性测试(测试结果为通过该节点访问此网页获得 HTTP 响应所需要的时间)，来确认节点的可用性。
>
> Quantumult 使用 HEAD 方法将 HTTP 请求发送到服务器检查 url 来测试代理的状态，结果应该是两个延迟，第一个是 TCP 与代理服务器的握手，第二个是 Quantumult 成功地从服务器检查 url 接收 HTTP 响应的总时间。
>
> Quantumult 界面中的延迟测试方式均为网页响应性测试，显示的最终延迟均为通过对应节点访问测试网页获得 HTTP 响应所需要时间。
>
> 由于 Trojan 协议为无响应校验协议，使得 HTTP 检测方式即使获得了 HTTP 响应，也不代表节点一定可用。
>
> 你同样可以在 server\_local/remote 中，为节点、订阅单独指定server\_check\_url参数&#x20;

resource\_parser\_url= <https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js>

> 资源解析器，可用于自定义各类远程资源的转换，如节点，规则 filter，复写 rewrite 等，url 地址可远程，可 本地/iCloud(Quantumult X/Scripts目录); 具体内容直接参照链接里的使用说明。
>
> 不要重复添加资源解析器！

geo\_location\_checker=<http://ip-api.com/json/?lang=zh-CN>, <https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/IP\\_API.js>

> geo\_location\_checker用于节点页面的信息展示，可完整自定义 ;&#x20;
>
> extreme-ip-lookup为Quantumult X 作者提供的示范 api ;
>
> geo\_location\_checker=<http://extreme-ip-lookup.com/json/>, <https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js> ;上面是解析器作者KOP-XIAO（Shawn）所使用的 api 及获取、展示节点信息的 js；功能比原作者提供的更为强大

<details>

<summary>其它一些GEO信息检查器</summary>

```
注意不同时启用两个geo_location_check
```

以下是搜集的`geo_location_checker`

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://jexxagn.netlify.app/IP-API.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/GeoLocationChecker/QuantumultX/IP-API.js
```

```
geo_location_checker = http://ip-api.com/json, https://raw.githubusercontent.com/kiksong/qsc/master/qx/script/IPInfo.js
```

```
geo_location_checker = http://ip-api.com/json/?fields=8450015&lang=zh-CN,https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/ip-api.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://github.com/KOP-XIAO/QuantumultX/raw/master/Scripts/IP_API.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/ConnersHua/RuleGo/master/Quantumult/Script/geo_location_checker.js
```

</details>

dns\_exclusion\_list=\*.qq.com, qq.com

> DNS排除列表，dns exclusion list中的域名将不使用fake-ip方式. 其它域名则全部采用 fake-ip 及远程解析的模式&#x20;

running\_mode\_trigger 设置，即根据网络自动切换 分流/直连/全局代理 等模式。

> filter - 规则分流，all\_proxy - 全部代理，all\_direct - 全部直连
>
> running-mode-trigger 模式下，跟手动切换直连/全局代理 等效，rewrite/task 模块始终会生效，设置简单；
>
> 示例：running\_mode\_trigger=filter, filter, asus-5g:all\_direct, asus: all\_proxy
>
> 上述写法，前两个 filter 表示 在 4G 网络跟一般 Wi-Fi 下，走 filter(分流)模式，asus-5g 则切换为全局直连，asus 切换为全局代理；
>
> 与ssid-suspend以及ssid策略组的区别
>
> \- ssid-suspend 下，Quantumult X 网络相关功能会停止工作，只有\[task] 模块生效；
>
> \- ssid 策略组，属于 filter 即分流模式的一个小部分，灵活，但设置相对麻烦；
>
> \- running\_mode\_trigger 模式下，跟手动切换直连/全局代理 等效，rewrite/task 模块始终会生效，设置简单;

ssid\_suspended\_list设置，

ssid\_suspended\_list=Asus, Shawn-Wifi

> ssid\_suspended\_list 写入你想要 Quantumult X 暂停的 Wi-Fi网络名称，多个wifi用“,”连接 ;

udp\_whitelist=53, 123, 1900, 80-443

> UDP名单，留空则默认所有为端口。不在udp白名单列表中的端口，将被丢弃处理。
>
> 参数 udp\_whitelist 从 IP 层控制 UDP 数据是否需要舍弃；如舍弃，则该 UDP 请求不会进入规则模块以及策略模块，TCP/UDP 请求记录中也不会有相应的条目，但仍可在日志中查询到相关信息（日志等级 debug）。
>
> 该参数控制的是流入 Quantumult X Tunnel 的请求，并非 Quantumult X Tunnel 发出的请求，即不会作用于节点所使用的 UDP 目标端口。&#x20;

excluded\_routes= 192.168.0.0/16, 172.16.0.0/12, 100.64.0.0/10, 10.0.0.0/8

> 跳过代理，列表中的内容将不经过 QuantumultX的处理&#x20;

参数 fallback\_udp\_policy

> 可选值：reject，direct
>
> 参数 fallback\_udp\_policy 的值仅支持末端策略（末端策略为经由规则模块和策略模块后所命中的策略，例如：direct、reject 以及节点；不支持内置策略 proxy 以及其它自定义策略）。
>
> 当 UDP 请求经过规则模块以及策略模块后所命中的节点为 Quantumult X 所不支持 UDP 转发的节点（例如：VMess），或命中的节点虽支持 UDP 转发但节点配置未显示注明 udp-relay=true 的节点（例如：SS 或 SSR 且与服务器是否真实开启了 UDP 转发无关），则 fallback\_udp\_policy 会被使用。该参数默认值为 reject。
>
> 注意：如果您需要调整该参数的值为 direct，请务必清楚了解同一目标主机名 TCP 请求与 UDP 请求的源地址不同所造成的隐私及安全风险。

icmp\_auto\_reply=true/false

> ICMP(Internet Control Message Protocol) 协议是 TCP/IP 协议族的一个子协议,用于在IP主机、路由器之间传递控制消息。
>
> icmp\_auto\_reply 这个内核参数控制系统对 ICMP 请求的自动回复行为。
>
> icmp\_auto\_reply=true 意味着:
>
> \- 系统会自动回复收到的 ICMP 请求数据包。
>
> \- 比如当接收到 ICMP Echo Request (ping) 数据包时,会自动回复 ICMP Echo Reply 数据包。
>
> \- 这是 Linux 系统默认的设置,用于支持 ICMP 数据包的正常响应。
>
> icmp\_auto\_reply=false 意味着:
>
> \- 系统不会自动回复 ICMP 请求。
>
> \- 接收到 ping 请求时不会回复。
>
> \- 可以用于阻止某台主机响应 ping 查询。
>
> \- 需要手动处理及回复 ICMP 数据包。
>
> 总之,icmp\_auto\_reply 参数控制是否自动响应ICMP请求,默认为 true 以支持 ICMP 协议正常工作。
>
> 设置为 false 可以实现“隐藏”主机不被 ping 到的效果。
