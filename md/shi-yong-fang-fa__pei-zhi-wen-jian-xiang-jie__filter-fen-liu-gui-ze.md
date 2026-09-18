> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze.md).

# filter(分流规则)

### 概念

分流规则属于规则系统，是要结合策略一起进行。

规则系统中有两个基本概念：策略和规则

1. 策略：描述了QX进行转发的方式，有两种类别：

* 内置策略：DIRECT、REJECT、PROXY
* 自定义策略：根据一定的规则从子策略中选择一个最终策略。

  * **`static 策略组`**：通过 UI 菜单选择一个策略。
  * **`available 策略组`：**&#x9009;择可用的策略中，最靠前的策略。
  * **`round-robin 策略组`**：轮询策略，按网络请求轮流使用组内所有策略
  * **`dest-hash 策略组`**`：`随机负载均衡
  * **`url-latency-benchmark 策略组：`**&#x9009;择延迟最低的策略
  * **`SSID 策略组：`**&#x6839;据当前的 Wi-Fi SSID 选择一个策略

  关于策略组的详解见[policy（自定义策略组) ](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/policy-zi-ding-yi-ce-le-zu.md)

2. 规则：QX的规则由三个部分组成：类型、参数和策略。当参数满足时，该规则匹配，使用该规则指定的策略。

> 分流规则可以分为[本地规则(filter\_local)](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze/filterlocal-ben-di-fen-liu.md)和[远程规则集⁠(filter\_remote)](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze/filterremote-yuan-cheng-fen-liu-gui-ze.md)，远程规则集可以理解为数条单一分流规则的合集。

{% hint style="info" %}
通俗的说，规则和策略就是让什么流量走什么线路

规则：决定哪些流量需要被转发(决定哪些车要走)

策略：决定流量应该被转发到哪里(决定车要走哪条路开到哪里)
{% endhint %}

### QX目前支持的规则类型有：

* HOST
* HOST-SUFFIX
* HOST-WILDCARD
* HOST-KEYWORD
* USER-AGENT
* IP-CIDR
* IP6-CIDR
* GEOIP
* IP-ASN

### 规则类型介绍

#### HOST 域名&#x20;

```
[filter_local]
HOST,www.google.com,policy 
```

当请求的域名**完全匹配**时，则执行该规则将 `www.google.com` 通过 `policy`⁠ 指定的策略连接。

#### HOST-SUFFIX 域名后缀&#x20;

```
[filter_local]
HOST-SUFFIX,youtube.com,policy 
```

匹配域名及其子域名，将任何以 `youtube.com` 结尾的域名通过 `policy`⁠ 指定的策略连接在这种情况下, `www.youtube.com` 和 `foo.bar.youtube.com` 都将通过 `policy`⁠ 指定的策略连接，但是不会匹配`youtube.uk`或者`ukyoutube.com`。

#### HOST-KEYWORD 域名关键字&#x20;

```
[filter_local]
HOST-KEYWORD,google,policy 
```

将任何包含 `google` 关键字的域名通过 `policy`⁠ 指定的策略连接在这种情况下, `www.google.com` 或 `googleapis.com` 都将将通过 `policy`⁠ 指定的策略连接。

#### HOST-WILDCARD 域名通配符

```
[filter_local]
host-wildcard,*abc.com,policy
```

将任何匹配 `*abc.com` 的域名通过 `policy`⁠ 指定的策略连接。因该条规则消耗性能较大，不建议使用。

#### GEOIP IP地理位置 (国家代码)&#x20;

GEOIP 规则用于根据数据包的目标 IP 地址的**国家代码**路由数据包. QX使用 [MaxMind GeoLite2](https://dev.maxmind.com/geoip/geoip2/geolite2/)数据库来实现这一功能.

```
[filter_local]
GEOIP,CN,DIRECT
```

将任何目标 IP 地址为中国的数据通过 `DIRECT`⁠ 策略连接(即中国的域名/IP走直连)。

#### IP-CIDR/IP6-CIDR IP地址段&#x20;

IP-CIDR 规则用于根据数据包的**目标 IPv4/IPv6 地址**路由数据包.

```
[filter_local]
IP-CIDR,127.0.0.0/8,policy 
IP6-CIDR,2620:0:2d0:200::7/32,policy
```

将任何目标 IP 地址为 `127.0.0.0/8` 、`2620:0:2d0:200::7/32`的数据将通过 `policy`⁠ 指定的策略连接。如果不清楚这里的 `/32` 与 `/128`，需要自行了解「CIDR」与「子网掩码」，还可以搜索「子网掩码计算器」获取帮助。

#### IP-ASN

通过 IP 自治系统编号，比如 `IP-ASN,714`。<br>

#### **USER-AGENT**

`USER-AGENT,Instagram*,DIRECT`

这个规则匹配相应的 USER-AGENT，可以使用像 \* 或者 ? 这样的通配符

{% hint style="info" %}
在 iOS 15 系统后，系统出于隐私保护考虑，不再于 CONNECT 请求中提供 User-Agent，这意味着对于所有 HTTPS 请求，在未开启 MITM 时，User-Agent 均不可见且规则无法生效。
{% endhint %}

#### FINAL 全匹配&#x20;

```
[filter_local]
FINAL,policy
```

FINAL 规则用于没有匹配到的规则。 该规则是**必需**的, 通常用作最后一条规则。`FINAL,policy` 将没有匹配到的规则通过 `policy` 指定的策略连接。

### 规则参数

默认情况下，即不带上参数时，则当处于 Wi-Fi 网络时使用 Wi-Fi 数据，当处于仅蜂窝网络时使用网络数据，

```
[filter_local]
host-suffix, qq.com, direct, force-cellular
host-suffix, qq.com, direct, multi-interface
host-suffix, qq.com, direct, multi-interface-balance
host-suffix, qq.com, direct, via-interface=pdp_ip0
```

可以使用几个参数来指定规则的出站接口：

* `force-cellular`：当处于 Wi-Fi 网络时仍使用蜂窝网络数据；
* `multi-interface`：当处于 Wi-Fi网络时，同时使用 Wi-Fi 网络与蜂窝网络建立 TCP 连接，使用拥有最佳 TCP 握手值的连接来传输数据。
* `multi-interface-balance`：当处于 Wi-Fi 网络时，均衡使用 Wi-Fi 网络与蜂窝网络，以提升并发任务的出口带宽。
* `via-interface`：指定出站接口

另外，还可以直接在「设置」底部的「其他设置」中，全局设置「出站接口」。<br>

### 规则的匹配顺序：

▎本地>远程>final

▎不开分流匹配优化：按照在配置中的顺序从上到下，域名类规则>IP类规则

▎开分流匹配优化：host > host-suffix > host-keyword(wildcard) > geoip = ip-cidr (ip6-cidr)> user-agennt

▎远程规则开插入资源：优先级会大于本地规则

根据以上的分流规则的原理，得出结论，一份比较完善的配置文件中分流规则的顺序应该是：

1. 修正规则（非必须但建议的，不能屏蔽的/系统服务类型，一般为直连，DIRECT）
2. 去广告规则（非必须，一般为拒绝，REJECT）
3. 特殊/需要单独分流的规则（比如OpenAl，被包含在大分流规则里面的，往上放）
4. 国外必须代理（必须，被墙了的，不代理无法访问，一般为 PROXY，或者自己选择的节点 / 策略）
5. 国外建议代理的（非必须，可直接访问也可以代理的，一般为 PROXY，或者自己选择的节点 / 策略）
6. 局域网规则 （非必须，DIRECT策略，绕过代理,直连本地网络，解决特殊内网环境可能造成的影响）
7. 国内规则（建议有，一般为直连，常采用 GEOIP 规则，也可以用ASN等，策略是 DIRECT）
8. FINAL（兜底）（自带的，建议为 PROXY，或者自己选择的节点 / 策略或者直连均可）

分流规则的排列原则是小范围规则在上面大范围在下面最后兜底。

{% hint style="info" %}
由于QX的规则系统内，每条单独的规则必须有对应的策略(包括规则集内的规则)，因此：

当规则集内的规则<mark style="color:red;">没有策略</mark>时，且<mark style="color:red;">不设置策略偏好</mark>，会出现<mark style="color:red;">报错</mark>

\
当规则集内的<mark style="color:green;">规则有策略</mark>，但是这<mark style="color:green;">个策略并不存在于你的配置时</mark>，会<mark style="color:green;">自动生成</mark>一个或多个以规则集内<mark style="color:green;">`规则的策略`</mark>为名称的<mark style="color:green;">策略组</mark>

当<mark style="color:purple;">开启解析器</mark>，且<mark style="color:purple;">不设置策略偏好</mark>时，解析器会自动修改规则内的策略偏好，导致出现一个<mark style="color:purple;">`Shawn策略组`</mark>，此时只要将规则<mark style="color:purple;">设置好策略偏好</mark>，即可删除<mark style="color:purple;">`Shawn策略组`</mark>
{% endhint %}

避免这些问题最近的的方法，就是<mark style="color:red;">设置策略偏好</mark>，将规则强制指向策略组/策略！⁠

后面的[本地分流](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze/filterlocal-ben-di-fen-liu.md)和[远程分流（远程规则集、规则资源）](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze/filterremote-yuan-cheng-fen-liu-gui-ze.md)部分分别讲它们的添加方式
