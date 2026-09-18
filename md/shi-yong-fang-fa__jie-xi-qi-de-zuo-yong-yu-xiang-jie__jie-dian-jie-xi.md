> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/jie-xi-qi-de-zuo-yong-yu-xiang-jie/jie-dian-jie-xi.md).

# 节点解析

### 1.作用

1、将其它格式的节点订阅，解析成 Quantumult X所支持的格式，支持原格式：

𝐕2𝐫𝐚𝐲𝐍/𝗦𝗦(𝗥/𝗗)/𝗛𝗧𝗧𝗣(𝗦)/𝗧𝗿𝗼𝗷𝗮𝗻/𝗤𝘂𝗮𝗻𝘁𝘂𝗺𝘂𝗹𝘁(𝗫)/𝗦𝘂𝗿𝗴𝗲/𝐂𝐥𝐚𝐬𝐡/𝐒𝐡𝐚𝐝𝐨𝐰𝐫𝐨𝐜𝐤𝐞𝐭/𝐋𝐨𝐨𝐧

2、并有以下参数，以便 **`修改、个性化调整`** 节点信息

### A. 操作参数

见下表中各参数的用法和示例

<table data-full-width="true"><thead><tr><th width="173">参数</th><th width="132">变量</th><th width="235">用途</th><th width="252">备注</th><th>示例</th></tr></thead><tbody><tr><td><strong><code>emoji</code></strong></td><td>1（国行手机用 2 ）/-1</td><td>添加/删除节点名内的emoji旗帜，如🇭🇰、🇺🇸</td><td>基于节点名，如香港、美国</td><td><mark style="color:red;"><code>emoji=1</code></mark></td></tr><tr><td><strong><code>udp</code></strong></td><td>1/-1</td><td>开启/关闭 节点的 udp-relay 参数</td><td>实际与节点服务端开启状态相关</td><td><mark style="color:red;"><code>udp=-1</code></mark></td></tr><tr><td><strong><code>tfo</code></strong></td><td>1/-1</td><td>开启/关闭 节点的 fast-open 参数</td><td>实际与节点服务端开启状态相关</td><td><mark style="color:red;"><code>tfo=1</code></mark></td></tr><tr><td><strong><code>uot</code></strong></td><td>1</td><td>开启 udp-over-tcp=true选项（仅限SS(R)）</td><td>实际与节点服务端开启状态相关</td><td><mark style="color:red;"><code>uot=1</code></mark></td></tr><tr><td><strong><code>cert</code></strong></td><td>1/-1</td><td>开启/关闭 节点 tls 证书验证</td><td>请自行确认节点tls证书能否通过验证</td><td><mark style="color:red;"><code>cert=1</code></mark></td></tr><tr><td><strong><code>in/out</code></strong></td><td>匹配名字</td><td>保留/删除节点，用 + 连接多个参数(或)，用 . 连接多重条件(与)</td><td>仅匹配节点名的内容</td><td><mark style="color:red;"><code>in=香港+日本&#x26;out=游戏</code></mark></td></tr><tr><td><strong><code>regex/regout</code></strong></td><td>正则匹配</td><td>正则匹配 保留/删除 节点</td><td>对节点完整信息匹配，端口、加密等</td><td><mark style="color:red;"><code>regex=(🇭🇰.*IPLC|🇺🇸)</code></mark></td></tr><tr><td><strong><code>replace</code></strong></td><td>regex@str</td><td>正则替换节点中的信息</td><td>可用于重命名、更改host等</td><td><mark style="color:red;"><code>replace=(host=)(.*?，)@$1abc.com</code></mark></td></tr><tr><td><strong><code>aead</code></strong></td><td>-1</td><td>用于关闭Vmess节点的 AEAD参数</td><td>即 aead=false</td><td><mark style="color:red;"><code>aead=-1</code></mark></td></tr><tr><td><strong><code>host</code></strong></td><td>混淆参数</td><td>用于更换混淆参数</td><td>需要原本信息中有host参数</td><td><mark style="color:red;"><code>host=abc.com</code></mark></td></tr><tr><td><strong><code>checkurl</code></strong></td><td>测试url</td><td>指定 <mark style="color:red;"><code>server_check_url</code></mark> 参数</td><td>如为网易云节点指定网易云测试连接</td><td><mark style="color:red;"><code>server_check_url=http://abc.com</code></mark></td></tr><tr><td><strong><code>sort</code></strong></td><td>1/-1/x/规则</td><td>为节点排序，正序/逆序/随机/参数规则</td><td>仅针对节点名内容</td><td><p><mark style="color:red;"><code>sort=IEPL&#x3C;IPLC&#x3C;BGP</code></mark> ：靠后排序</p><p> <mark style="color:red;"><code>sort=🇭🇰>🇹🇼>🇯🇵>🇺🇸</code></mark><code>：</code>靠前排序</p></td></tr><tr><td><strong><code>flow</code></strong></td><td>订阅到期时间:总流量:已用流量</td><td>增加流量、到期时间 等信息</td><td>如果订阅header中已有该信息，则flow参数会被忽略</td><td><mark style="color:red;"><code>flow=2022-06-02:1000:54</code></mark></td></tr><tr><td><strong><code>info</code></strong></td><td>1</td><td>开启流量信息通知</td><td>需要订阅header中有流量信息，或节点中存在符合要求的流量假节点信息</td><td><mark style="color:red;"><code>info=1</code></mark></td></tr><tr><td><strong><code>ptn/npt</code></strong></td><td>1/2/3/4/5/6/7/8</td><td>将节点名英文/数字替换成样式 ⇒ 🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ, ①\❶\⓵\𝟙\¹\₁\𝟏\𝟷</td><td>用于节点名的花样字体显示</td><td><mark style="color:red;"><code>ptn=3&#x26;npt=4</code></mark></td></tr></tbody></table>

### B. 占位符参数

占位符参数为节点名个性化而用，可用在 rename 以及 replace 参数中

<table data-full-width="true"><thead><tr><th width="260.5">参数名</th><th>参数值</th><th>说明</th><th>示范</th></tr></thead><tbody><tr><td>$type</td><td>0/1/2/3/4/5/6/7</td><td></td><td></td></tr><tr><td>$emoji</td><td>1/2</td><td>将 emoji(🇭🇰 等) 作为可操作参数</td><td><mark style="color:red;"><code>rename=@[$emoji2]</code></mark> , 在节点名后添加后缀，如：[🇭🇰]</td></tr><tr><td>$index</td><td>0/1/2/3/4/5/6/7/8</td><td>将节点的序号作为可操作参数，样式为：<mark style="color:red;"><code>1\①\❶\⓵\𝟙\¹\₁\𝟏\𝟷</code></mark></td><td><mark style="color:red;"><code>rename=@「$index1」</code></mark>,在节点名后添加后缀，如：「❶」</td></tr><tr><td>$tag</td><td>字母样式/数字样式</td><td>将订阅的tag(标签参数) 作为操作符号 样式序号分别对应 ptn与npt的序号</td><td><mark style="color:red;"><code>rename=@[$tag24]</code></mark>，则 Dler01 样式为 [🄳🄻🄴🅁⓪①]</td></tr></tbody></table>

## 2.使用方法

### A、远程引用

1、在你的 <mark style="color:red;">`订阅连接(资源路径)`</mark> 后添加 <mark style="color:red;">`#`</mark>， 然后添加参数，多个参数之间用 <mark style="color:red;">`+`</mark> 连接

2、比如我的订阅连接为：

```
https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.snippet
```

3、我需要的参数为 ：<mark style="color:red;">`emoji=1&tfo=1&in=香港+台湾`</mark>

4、则最后链接（`资源路径`）为：

{% code fullWidth="true" %}

```
https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.snippet#emoji=1&tfo=1&in=香港+台湾
```

{% endcode %}

5、开启资源解析器开关

6、查看图片示范

<details>

<summary>示范图片</summary>

<img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2Fv8Wsu1D1cQdBVUFbwdQ2%2FUntitled-3.png?alt=media&amp;token=4de41cff-47f7-4ec7-a9b1-0cd1e062d2ae" alt="" data-size="original">

</details>

### B、本地引用（资源片段）

1、将参数填写在资源片段的 第一行

2、引用资源片段，开启资源解析器即可

<details>

<summary>3、查看图片示范</summary>

<img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F2BrnrFxdO4N8DUTuZFMy%2FUntitled-4.png?alt=media&amp;token=a4a3661e-ead8-4323-b2a7-39c0677d7a90" alt="" data-size="original">

</details>
