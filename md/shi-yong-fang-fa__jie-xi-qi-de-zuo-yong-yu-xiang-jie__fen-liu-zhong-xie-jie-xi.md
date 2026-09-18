> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/jie-xi-qi-de-zuo-yong-yu-xiang-jie/fen-liu-zhong-xie-jie-xi.md).

# 分流&重写解析

{% hint style="info" %}
因为解析器针对 <mark style="color:red;">分流&重写</mark> 的参数基本重合，所以一并讲解
{% endhint %}

## 作用

1、将其它格式的 <mark style="color:red;">`分流/重写`</mark> 订阅，解析成 <mark style="color:red;">`Quantumult X`</mark> 所支持的格式，支持原格式：

```jsx
Surge(rule-set, domain-set, module)
Clash-Rule-Provider
纯域名 list
带规则部分的完整配置 
```

2、并有以下参数，以便 <mark style="color:red;">**`修改、个性化调整`**</mark> 节点信息

<table data-full-width="true"><thead><tr><th width="173">参数名</th><th>参数值</th><th>说明</th><th>示范</th></tr></thead><tbody><tr><td><strong><code>in/out</code></strong></td><td>保留/删除 相关分流/重写</td><td>匹配关键字</td><td><mark style="color:red;"><code>out=tb_price+wb_ad</code></mark> , 删除 淘宝比价规则(<mark style="color:red;"><code>tb_price.js</code></mark>) 以及 微博去广告 (<mark style="color:red;"><code>wb_ad.js)</code></mark></td></tr><tr><td><strong><code>inhn/outhn</code></strong></td><td>保留/删除 相关 主机名(hostname)</td><td>匹配分流/重写主机名中的关键字</td><td><mark style="color:red;"><code>outhn=weibo</code></mark></td></tr><tr><td><strong><code>regex/regout</code></strong></td><td>正则保留/删除</td><td>可与 in(hn)/out(hn) 一起使用，in(hn)/out(hn) 会优先执行;</td><td><mark style="color:red;"><code>regex=?iweibo|Netflix</code></mark> , 只保留weibo以及Netflix关键字的内容</td></tr><tr><td><strong><code>policy</code></strong></td><td>策略组名</td><td>用于指定分流中策略组。 Surge rule-set中无策略组，请指定policy参数，或使用策略偏好指定</td><td><p><mark style="color:red;"><code>policy=Global</code></mark></p><p>如果原分流中无策略组，默认生成 Shawn 策略组</p></td></tr><tr><td><strong><code>pset</code></strong></td><td>regex1@policy1+regex2@policy2</td><td>为同一分流规则中不同关键词(允许正则表达式)指定不同策略组</td><td><mark style="color:red;"><code>pset=weibo@微博+Netflix@奈飞</code></mark></td></tr><tr><td><strong><code>replace</code></strong></td><td>regex@newregex</td><td>正则替换</td><td><mark style="color:red;"><code>replace=(price)(.*)@$1_lite$2+jp@kr</code></mark> 将比价脚本换成lite版本，将TikTok中JP参数换成KR</td></tr><tr><td><strong><code>cdn</code></strong></td><td>1</td><td>将引用内容中的github地址替换成cdn地址连接</td><td><mark style="color:red;"><code>cdn=1</code></mark></td></tr><tr><td><strong><code>fcr</code></strong></td><td>1/2/3</td><td>为分流规则添加 force-cellular/multi-interface/multi-interface-balance 参数， 强制移动数据/混合数据/负载均衡</td><td><mark style="color:red;"><code>fcr=2</code></mark></td></tr><tr><td><strong><code>via</code></strong></td><td>接口参数</td><td>为分流规则添加 via-interface 参数, 0 表示 via-interface=%TUN%</td><td><mark style="color:red;"><code>via=0</code></mark></td></tr><tr><td><strong><code>relay</code></strong></td><td>目标策略名</td><td>批量将节点订阅转换为ip/host规则，用于实现代理链</td><td><mark style="color:red;"><code>relay=Shawn</code></mark></td></tr></tbody></table>

## 使用方法

同节点解析方法，如下👇

[使用方法](https://qx.atlucky.me/shi-yong-fang-fa/jie-xi-qi-de-zuo-yong-yu-xiang-jie/pages/wcsCybuPc9Eo7oSZhvda#id-2.-shi-yong-fang-fa)
