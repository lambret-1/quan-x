> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie.md).

# 配置文件详解

本部分对QX的配置文件分字段进行一些参数讲解和示例，水平有限，其中可能有错漏之处，请指出！

QX的配置文件中包含下面表格中的一些字段，列表中会分别对其做一些示例和讲解。

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FcPcciqB8Pz2I7LQBAKb5%2FIMG_6266.png?alt=media&amp;token=0e9d26b6-01b8-46db-92f6-fb3b1c852f79" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
配置文件中类似 <mark style="color:red;">**\[general]**</mark> 这种称之为字段，一个<mark style="color:red;">**配置文件里面不能有重名的字段**</mark>，例如不能有两个\[general]字段。

如果你粘贴别人的文本进去，只需要将字段里面的内容放进对应字段下面就行。

类似 主机名 hostname= \*.example.com, \*.sample.com 这种添加进自己的配置文件的时候，只需要复制粘贴“*<mark style="color:green;">`*.example.com, *.sample.com`</mark>*”这一部分接在自己配置文件里面的hostname= xxxx后面即可，中间用","链接（英文格式的逗号）。

例如原来的是

hostname=1.1.1.1,2.2.2.2,3.3.3.3

之后：

hostname=1.1.1.1,2.2.2.2,3.3.3.3,*<mark style="color:green;">`*.example.com, *.sample.com`</mark>*
{% endhint %}

```
以 ";" 或 "#" 或 "//" 开头的行为注释行，即该行配置不起作用。
```

|                                                                                                                                    |                                                                                                       |                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [general](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/tong-yong-she-zhi-general.md)                                               | [DNS](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/dns.md)                                            | [policy](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/policy-zi-ding-yi-ce-le-zu.md)         |
| [节点](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/jie-dian.md)[(server)](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/jie-dian.md) | [mitm](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/mitm.md)                                          | [分流(filter)](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/filter-fen-liu-gui-ze.md)          |
| [重写(rewrite)](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/zhong-xie-rewrite.md)                                                   | [task\_local](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/gong-ju-fen-xi/http-qing-qiu-tasklocal.md) | [http\_backend](/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/gong-ju-fen-xi/http_backend.md) |
|                                                                                                                                    |                                                                                                       |                                                                                              |
