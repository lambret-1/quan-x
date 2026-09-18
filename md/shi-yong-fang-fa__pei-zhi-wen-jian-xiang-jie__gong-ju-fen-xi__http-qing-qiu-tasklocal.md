> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/gong-ju-fen-xi/http-qing-qiu-tasklocal.md).

# HTTP请求\[task\_local]

## 简介

QX 对于此项目的介绍：构造HTTP或HTTPS请求，并在指定的时间发送。兼容5位或6位（不包括指令）cron语法。

计划任务需QX处于运行状态以及计划任务开关为开启状态。

点击任务图标可禁用单个任务，但您仍可向右滑动对应条目手动执行。

这部分添加的内容体现在配置文件&#x7684;**`[task_local]`**&#x5B57;段内格式：

```
[task_local]
0 0 * * * https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-task.js#force-timeout=10000&method=POST, tag=Sample, img-url=https://raw.githubusercontent.com/crossutility/Quantumult-X/master/quantumult-x.png, enabled=true
```

配置文件中一条完整的http请求是这么组成的

```
<任务类型>, <资源路径>,<资源标签>,<图标路径>,<是否启用>
```

* **任务类型**：cron（定时任务）、event-network（网络切换脚本，网络切换/变化时触发）、event-interaction（UI交互脚本，首页长按策略或节点唤出）
* **`tag`**：任务名称标识
* **`img-url`**：可本地可网络，只支持144\*144大小图标
* **`enabled`** 是否启用该任务，若不使用可改为 `false`

## 界面

在使用这系列的功能之前，先对界面和各图标的功能简单介绍一下。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FjAxhvwwjtIHokUhflQfW%2FIMG_6301.png?alt=media&amp;token=faaaa6a8-f4a4-451c-99b0-9a5020e9bb0f" alt=""><figcaption></figcaption></figure>

在任务上向左和向右滑动会出现一些选项，点击任务图标可以禁用该任务。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FifK8knjOLG9TvpSgyk25%2Fsnagit021-task.png?alt=media&amp;token=a397bcbb-cc5b-4f64-b5b8-f94b23832cc3" alt=""><figcaption></figcaption></figure>

### 任务仓库task gallery 订阅

TF 版本 1.0.17 (build 433)后，Quantumult X 加入了 task-gallery，可以实现签到脚本订阅&管理。

[官方示范格式JSON](https://github.com/crossutility/Quantumult-X/blob/master/gallery.json)

[可用API转换，示范](https://t.me/QuanX_API/63)

添加步骤见下面图文

这里以下面这个为例

[`https://dove.589669.xyz/task2qxgallery?&sub=https%3A%2F%2Fraw.githubusercontent.com%2Fchavyleung%2Fscripts%2Fmaster%2FLoon.task.conf&name=Chavy_Tasks`](https://dove.589669.xyz/task2qxgallery?\&sub=https%3A%2F%2Fraw.githubusercontent.com%2Fchavyleung%2Fscripts%2Fmaster%2FLoon.task.conf\&name=Chavy_Tasks)

点击上面最左边的任务仓库图标，在出来的页面中点击➕图标，在弹出的对话框中清理掉原来的链接地址，注意完全清理掉，粘贴进去要添加的仓库链接，注意不要留空格

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FOZW94SEjQGG4fhGoMNVH%2Fsnagit022-task.png?alt=media&amp;token=e072392b-5d2f-4522-aa7a-c087a986b153" alt=""><figcaption></figcaption></figure>

如果链接没有错误的话，添加进去的任务仓库会显示仓库名称和任务图标，点击想添加使用的任务图片旁边的➕号，添加到请求列表中去。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F84TO3LAMhFnm3Ecc23fW%2Fsnagit023-task.png?alt=media&amp;token=f7e0127d-8237-4c2b-8b96-ff5ddc0770e6" alt=""><figcaption></figcaption></figure>

签到类型的脚本，配置正确的话到设定时间会在QX启动的情况下自动运行，这种一般需要配合着账户的cookie，具体使用方法请阅读脚本中或者作者写的使用说明。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FbYJrKotsTv88Qs4GqmQu%2Fsnagit024-task.png?alt=media&amp;token=292346be-b046-4b40-b934-3f9b6e51f9b3" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
使用任务仓库请注意其中的脚本的使用方法和有效性，有些脚本可能已经失效或者过期了。
{% endhint %}

### 实战添加boxjs和单个任务

涉及到签到类型的task都与账户的cookie和数据持久化有关联，这里以巴哈姆特的签到为例，图文描述一下boxjs的安装和订阅，以及单个任务添加等步骤，如果遇到相同类型的可以作为参考

脚本地址：`https://github.com/NobyDa/Script/blob/master/Bahamut/BahamutDailyBonus.js`

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F94CoteweMAkf52SySRcX%2FCC2024-01-22at10.39.31%402x.png?alt=media&amp;token=f82d58ea-4837-4b6f-8a7b-e27065cab00d" alt=""><figcaption></figcaption></figure>

通过阅读脚本的注释说明部分，可以看到需要用到boxjs订阅，并且给出了订阅地址，以及脚本的兼容性，如何使用等等

{% hint style="warning" %}
规范的开发者都会写清楚如何使用，养成阅读开发者说明的好习惯。
{% endhint %}

#### 添加boxjs

QX添加boxjs是在重写中进行的（早期是采用http\_backend，但是此方法已经废弃），添加步骤，点一下首页的风车图标，进入设置，点击重写板块下的规则资源，点击右上角的链接🔗图标，在资源路径中粘贴上boxjs的重写资源链接，填上标签，勾上资源解析器，并且保存即可。（远程重写的一些操作步骤见[重写章节](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite/rewrite_remote.md#tian-jia-fang-shi)）

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FyZgUIvXN7OT9k9FElo28%2Fsnagit025-task.png?alt=media&amp;token=b0b4db18-3eb5-4647-b693-85e822ea1837" alt=""><figcaption></figcaption></figure>

#### boxjs中添加订阅

在boxjs的订阅页面中，选择添加订阅（如果没有其它订阅时）或者右上角的➕号，将脚本介绍中的订阅地址粘贴进去（json格式）

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F5GWMcD1c3zUG2Ibbffue%2Fsnagit027-boxjs.png?alt=media&amp;token=9b8b2ca5-5cb2-4f05-841e-7a3988969449" alt=""><figcaption><p>boxjs添加订阅步骤</p></figcaption></figure>

保存后刷新出内容，在其中找到巴哈姆特签到相关的，按照脚本说明输入用户名和密码并保存。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2Fa1pevxCNYuZY98SXpPW4%2Fsnagit028-boxjs.png?alt=media&amp;token=0ed2dd5e-0bc3-4b38-83ea-80e92a8ff2e5" alt=""><figcaption><p>一般里面都含有很多内容，根据需要订阅使用，注意看使用说明</p></figcaption></figure>

#### 添加单个任务

添加方式有按照默认的先写cron再写入脚本，这种方式是将脚本的内容整个复制粘贴到脚本编辑器中，并存储在本地，因为一般人没有脚本的维护更新能力，不建议使用此种方式添加，在此也不做介绍了。介绍的是点击添加后选择文本方式和高级这两种

1.使用文本方式添加

在请求列表点击右上角的➕号，选择文本方式添加，将`[task_local]`底下的内容一次性的全部复制并粘贴进去后保存即可。

例如上面的脚本中说明QX的使用方法部分：

> ***
>
> 【 QX 1.0.10+ 脚本配置 】 :
>
> ***
>
> \[task\_local]&#x20;
>
> 0 8 \* \* \* <https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js>, tag=巴哈姆特签到, img-url=<https://raw.githubusercontent.com/NobyDa/mini/master/Color/bahamutGame.png>
>
> \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

则是将：

`0 8 * * * https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutDailyBonus.js, tag=巴哈姆特签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/bahamutGame.png`

这一部分全部复制后贴进去保存即可，见下图。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FvG6i2ATuNqLh7mRlrIMv%2Fsnagit030-task.png?alt=media&amp;token=6c49ee26-27a5-4faa-adcb-3f98c9b836c2" alt=""><figcaption><p>文本方式添加</p></figcaption></figure>

2.点击添加后选择高级方式添加，将字段按照对应位置填写进去保存即可

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FP5WDOZUAzqMDO5vCBGLv%2Fsnagit031-task.png?alt=media&amp;token=880b23a2-9824-46b7-abf9-5f86fd7126d6" alt=""><figcaption><p>填写时候按照类型添加即可</p></figcaption></figure>

添加成功后，手动执行看下效果

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F35YFEx8c4a6q59huHZ2M%2Fsnagit029-task.png?alt=media&amp;token=a8e93aa0-dee8-4140-876f-c007017b4f36" alt=""><figcaption><p>手动执行看下日志</p></figcaption></figure>

关于boxjs的一些使用等可以参照开发者本人的教程：<https://docs.boxjs.app>

以上是以巴哈姆特的签到配合boxjs做的一个示例的过程，如果有类似的可以作为参照，使用过程中请仔细阅读相关说明。
