> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/xia-zai-pei-zhi.md).

# 下载配置

QuantumultX 最大的特色，就是在保持丰富而灵活的策略分流功能的同时，实现了 节点与规则 的独立，而后通过内置的策略组PROXY（或自定义的策略组）实现了完整耦合。

配置文件中包含了这些信息，所以我们根据自己的需求可以使用别人已经做好的配置（下载配置）或者在别人的配置文件基础上根据自己需要进行增删。

[推荐配置](/shi-yong-fang-fa/tui-jian-pei-zhi.md)中会有一些已经做好的成熟配置，可以自行选用。

各配置文件之间没有优劣之分，不存在一个配置文件能够满足所有人的需求，可以在导入别人的配置后，根据自己的需求进行修改到适合自己使用。

**最好的配置是你自己的配置**

{% hint style="info" %}
QX系统本身已经自带一个简单的配置文件，导入机场的订阅节点后即可使用。

下载配置会**覆盖**当前使用的**全部配置内容**（包括节点、订阅、分流重写等），如当前已有配置，下载配置前**建议**通过导出配置操作进行**备份**。
{% endhint %}

操作步骤

以Lucky配置为例

下面链接为配置的链接地址，先复制链接地址，注意不要留空格

<pre><code><strong>https://raw.githubusercontent.com/As-Lucky/Lucky/main/Lucky-qx.conf
</strong></code></pre>

点击右下角的风车进入设置页面->拉到底下点击下载配置->粘贴上配置文件链接，注意不要留空格->点击右上角✔保存

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FvHq2suOAktxrViZwjrEZ%2Fsnagit002.png?alt=media&amp;token=6e869ea4-9a0f-4e18-bd21-b000a5ff399c" alt=""><figcaption></figcaption></figure>

配置URL正确的话会下载内容到本地，可以看一下内容和说明，然后保存即可使用。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FtQgzv8MqzO6KUyPzyhPq%2Fsnagit003.png?alt=media&amp;token=7aab7b2f-b74a-41f0-ad60-76c6cdb0581f" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
一些配置文件地址在GitHub上，可能下载时候需要代理。
{% endhint %}

{% hint style="info" %}
下载完配置后，需要导入订阅或者添加节点使用，导入订阅的方法见[使用方法](/shi-yong-fang-fa.md)中的[导入订阅](/shi-yong-fang-fa.md#dao-ru-ding-yue)，添加节点见[配置文件详解](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie.md)中的[节点](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/jie-dian.md)部分
{% endhint %}

如果下载的配置文件或者对QX的使用熟悉后，需要自己进行修改，请参见后面的[配置文件详解](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie.md)相关部分进行。
