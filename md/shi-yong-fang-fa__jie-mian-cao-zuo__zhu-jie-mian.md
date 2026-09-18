> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/jie-mian-cao-zuo/zhu-jie-mian.md).

# 主界面

打开QX App的第一个页面称之为主界面，主界面上有大量的入口和图标信息，下面以一个已经有完善配置的讲解一下主界面的一些图标意义和操作。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FZNJwXVAetKS5itwkrubl%2FIMG_6191.png?alt=media&amp;token=83e49b4d-5d01-4928-8c47-a8145415622a" alt=""><figcaption><p>图一</p></figcaption></figure>

{% hint style="warning" %}
补充：节点前标识：

* ⚠︎：表示有节点名称重复
  {% endhint %}

iPad界面下的图标含义及操作介绍

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2Fx5VM3XtExKRmWAyfVutA%2FUI1.JPEG?alt=media&amp;token=e1376acf-4aa3-4bdb-b2ac-b36540ed5b5d" alt=""><figcaption></figcaption></figure>

**「风车」按钮**

单击「风车」按钮进入「设置」页面

长按「风车」按钮，进入设置分流模式与资源更新界面

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2Fi6ZphgPZy5HG6Aq3mYGS%2FUI2.PNG?alt=media&amp;token=710d9931-9946-414e-adfb-1ffd4702aa80" alt=""><figcaption></figcaption></figure>

* 设置分流模式
  * 蓝绿色风车：全部代理，即所有请求均使用PROXY选择的节点访问
  * 纯黄色风车：全部直连，即所有请均不使用节点访问
  * 三色风车：规则模式，由分流规则及所有策略（内置以及自定义策略）共同決定是否通过节点以及通过什么节点访问。
* 资源更新
  * 点击🔁圆形按钮更新所有外部资源，包括节点、分流、重写及其引用的脚本
  * 如果只需要更新节点或重写，可以进入设置-分流/重写-资源规则，对指定的资源左滑，点击🔁单独更新；或点击右上角全部更新
  * 如果需要更新重写内的脚本，可以左滑指定重写资源，点击「🔍」→「全部更新
* 当左上角出现红色🔺警告时，表示有资源出现问题，可能是引用了错误的资源或不符合QX的资源格式，点击该🔺警告按钮，即可查看出现问题的资源

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F8YBGxNfMDO3FlKbQaTIP%2FUI3.PNG?alt=media&amp;token=9dbebd31-b274-4b9f-8924-a809f0eb035f" alt=""><figcaption></figcaption></figure>
