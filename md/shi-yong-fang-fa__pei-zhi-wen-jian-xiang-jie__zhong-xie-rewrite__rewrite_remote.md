> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite/rewrite_remote.md).

# rewrite\_remote

### 文本格式

通过重写中的规则资源添加的引用资源，保存在配置文件的\[rewrite\_remote]字段下，在配置文件中的格式为：

#### 配置文件`⁠rewrite_remote⁠`(远程重写)的写法

以下为配置文件`⁠rewrite_remote`⁠(即远程重写部分)的写法

```
[rewrite_remote]
https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-import-rewrite.txt, tag=Sample, enabled=true, update-interval=86400, opt-parser=true
```

配置文件中一条完整的远程重写配置是这么组成的：

```
<资源路径>, <资源标签>, <自动更新时间间隔>, <是否使用资源解析器>,<是否启用>
```

* **`tag`** 资源标签：相当于名称，标识这条远程重写文件的作用；
* **`update-interval`** 自动更新的时间间隔，单位为秒；
* **`opt-parser`** 是否使用资源解析器，若关闭则改为 `false`；
* **`enabled`** 是否启用该分流文件，若不使用可改为 `false`；

### 添加方式

* 找到重写文件的`RAW格式`链接，复制链接→设置里面的重写下的规则资源里面的资源路径，写好标签，必要时开启资源解析器，保存。<br>
* 受益于[@KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX/blob/master/Scripts/resource-parser.js)的资源解析器，使用非标准QuantumultX的重写时(例如一些脚本`.js`、其他软件的模块`.sgmodule`、插件`.plugin`⁠等，这些里面都包含有重写规则)，可开启解析器使其变为QX支持的格式，但这并不意味着上述格式的文件在开启解析器后一定可用。
* 只要用到QX的重写，[@KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX/blob/master/Scripts/resource-parser.js) 的资源解析器是避不开的一环，后面有对应的章节进行详解用法。见[资源解析器的作用与详解](/shi-yong-fang-fa/jie-xi-qi-de-zuo-yong-yu-xiang-jie.md)

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2Fv2RItRbmkZbnCUxx0SCa%2F701E595D-4369-4580-A442-DE603BBAB2D6.jpg?alt=media&amp;token=8b5165a5-ccb7-489d-b357-ad87b4d2b222" alt=""><figcaption></figcaption></figure>

### 重写远程资源路径中添加的一般为以下几种格式：

* xxxxx.snippet（本地的配置片段）
* <https://raw.githubusercontent.com/xxxxxx/xxxxx/main/xxxxxx.snippet(远程配置片段)>
* <https://raw.githubusercontent.com/xxxxxx/xxxxx/main/xxxxxx.conf(远程重写配置)>
* <https://raw.githubusercontent.com/xxxx/master/xxxxx.qxrewrite(远程重写配置)>
* <https://raw.githubusercontent.com/xxxx/xxxx/master/xxxxx.js(远程脚本，这种是**必须**搭配**对应本地重写**URL和hostname)----（**⚠️注意，这个其实是本地重写，只是引用的脚本在远程**）>
* <https://raw.githubusercontent.com/xxxx/xxxx/main/xxxx.sgmodule（Surge模块，需搭配解析器>)

{% hint style="warning" %}
千万别 直接把js脚本链接直接丢进rewrite引用，然后还跑来问“怎么报错？”&#x20;

同时，放对位置后，需要去 rewrite\_local里添加引用
{% endhint %}

见下图示例：

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FILPZIwkHZtUhJTWW3yHG%2FIMG_6286.png?alt=media&amp;token=64016a10-b9ea-4630-ac7a-a202b76f6c40" alt=""><figcaption><p>常见的重写格式</p></figcaption></figure>

###

{% hint style="warning" %}
虽然有资源解析器，可以往重写资源中添加很多类型的链接，但并不是什么都能加进去并起作用的！

建议添加前仔细阅读相关说明和添加方法！
{% endhint %}
