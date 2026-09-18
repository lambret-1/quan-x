> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze/filterremote-yuan-cheng-fen-liu-gui-ze.md).

# filter\_remote(远程分流规则)

通过分流-规则资源中添加的引用资源-分流，保存在配置文件的<mark style="color:red;">\[filter\_remote]</mark>字段下，这种一般是不能直接在本地直接修改其中的内容的，一般是以list的格式，每个list中可以包含大量的多种类型和参数的规则。如需修改list中的某条分流可以使用解析器来帮助完成。

#### 配置文件⁠`filter_remote⁠`(远程分流规则)的写法

以下为配置文件`⁠filter_remote`⁠(即远程分流规则集部分)的写法

```
[filter_remote]
https://example.com/reject.txt, tag=🛡️ Block Ads, force-policy=reject, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true
```

配置文件中一条完整的远程分流规则配置是这么组成的：

```
<资源路径>, <资源标签>, <策略偏好>, <自动更新时间间隔>, <是否使用资源解析器>, <插入资源>, <是否启用>
```

* **`tag`** 资源标签：相当于名称，标识这条远程分流文件的作用；
* **`force-policy`** 策略偏好：可选，此处明确设置为 REJECT 策略，当策略偏好选中某策略时，远程资源的过滤器中的策略将被忽略，并使用策略偏好中指定策略；
* **`update-interval`** 自动更新的时间间隔，单位为秒；
* **`opt-parser`** 是否使用资源解析器，若关闭则改为 `false`；
* **`inserted-resource`** 插入资源，将分流文件中的规则放置于本地规则之前；
* **`enabled`** 是否启用该分流文件，若不使用可改为 `false`；

{% hint style="warning" %}
远程分流规则集链接的格式一般为：

<https://example.com/reject.txt>  （后缀为<mark style="color:red;">**txt**</mark>格式)

<https://example.com/proxy.list>    (后缀为<mark style="color:red;">**list**</mark>格式)
{% endhint %}

添加方法：

* UI添加（强烈建议）
* 文本编辑（不建议）

灵活应用各种分流规则和分流规则集，可以达到使用服务商在不同国家地区推出的服务，例如，OpenAI是没有在香港地区推出服务的，这时候就需要在使用OpenAI的服务时候使用例如美国、日本或者新加坡等一些地方的节点策略，而奈飞，因为不同地区国家给出的语言和字幕是不同的，而新加坡地区是有中文字幕的所以一般会选择用新加坡的节点去看奈飞视频，等等等等。

以给QX配置加一个规则分流，让奈飞（Netflix）走新加坡线路节点为例，图文写一下UI添加的步骤：

1. 去GitHub获取Netflix的规则集：`https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Netflix/Netflix.list`
2. 点击右下角的风车进入设置->分流中的规则资源->右上角的链接🔗图标->资源路径贴上list地址,策略偏好中选择新加坡节点,资源标签写上奈飞视频->点击右上角的✔保存即可。

见下面图片示例步骤：

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FDV8yfpix6BfJKHOrMwpt%2Fsnagit009-filter.png?alt=media&amp;token=28ce803a-391f-494f-ba06-261ae7b14090" alt=""><figcaption><p>从GitHub找到需要的分流list</p></figcaption></figure>

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FIt0lbYOFKY81RbybdXpp%2Fsnagit011-filter.png?alt=media&amp;token=b3791024-b401-4731-bbcf-9b8489bd976a" alt=""><figcaption><p>通过UI添加分流规则选择策略偏好</p></figcaption></figure>

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2Fwm8Upowr01EGeeK1EOLQ%2Fsnagit012-filter.png?alt=media&amp;token=a3c70130-d525-4c73-b63a-dae34393d27a" alt=""><figcaption><p>保存后即可使用</p></figcaption></figure>

{% hint style="info" %}
分流规则集的位置是可以根据需要进行调整位置的，调整方法：长按规则集条目，微振动后最右侧会出现三条横线的图标，按住图标即可上下拖动到合适位置。
{% endhint %}

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FAiaHiW65YhgYiRbTn2q7%2Fsnagit013-filter%20(1).png?alt=media&amp;token=a80e76f8-d358-4a9a-a62e-34c3db605d8f" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
如何获取规则集？见[GitHub相关](/github-xiang-guan.md)中的[获取RAW链接](/github-xiang-guan.md#huo-qu-raw-di-zhi)
{% endhint %}
