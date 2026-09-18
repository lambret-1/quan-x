> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/mitm.md).

# mitm

{% hint style="info" %}
使用MITM就必须进行MITM根证书安装。
{% endhint %}

在 QX 中，MITM 根证书用于 HTTPS 解析，且只有配置了主机名的才会被 MITM 模块进行解析，主机名按照加载顺序进行匹配。

MITM 搭配用于去广告、内购破解等，请注意的是不是所有的都能进行 MITM，有一些进行 MITM 会导致 app 无法使用，例如 App Store、抖音、支付宝等，如果有时候遇到某个 app 无法使用，可以在 MITM 部份查看是否因此造成的，如果是发现错误的进行了 mitm，可以在主机名前加入“-”注释掉，通配符 \* 和？可以用于主机名，如果使用单独的一个 \* 符号作为主机名参数，则会匹配到所有的主机名（MITM ALL）

> “MITM” 是 “Man-in-the-Middle” 的缩写，翻译为中文是 “ 中间人攻击 ”。
>
> 中间人攻击是一种网络安全攻击技术，攻击者将自己置于通信的两个实体之间，以便能够监视、篡改或劫持它们之间的通信。在中间人攻击中，攻击者可以截获通信数据并进行各种操作，而通信的两个实体则对攻击者的存在一无所知。
>
> 通过中间人攻击，攻击者可以窃取敏感信息（如登录凭据、个人信息等）、篡改通信内容或进行其他恶意行为。为了防止中间人攻击，通信双方可以使用加密技术、数字证书和其他安全机制来确保通信的机密性和完整性。
>
> “MITM” 或 “ 中间人攻击 ” 是一个重要的网络安全概念，了解它可以帮助人们保护个人信息和网络通信的安全。

MITM根证书安装的方法请参照下面图片中的步骤：

点击MITM部分的生成证书->配置证书->允许下载->下载到iPhone

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FoGmXVmnLL6D9Wz92FZnR%2FIMG_3358-1.png?alt=media&amp;token=3734131d-1bb6-4d7b-8782-dd929c7d1179" alt=""><figcaption></figcaption></figure>

到手机的设置->已下载描述文件->安装描述文件->通用关于本机->证书信任设置->启用生成安装的证书

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2F5j5FRrL2S3J0DxpCQnIc%2FIMG_3363-1.png?alt=media&amp;token=7a7887e2-c6ad-4139-a207-d5160c370426" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
正确的安装并且信任了根证书后，QX的MITM开关才能打开生效。
{% endhint %}

#### 备份证书

当完成上面的步骤后，会在配置文件 `[mitm]` 区域，生成对应的`passphrase`和`p12`数据

```
[mitm]
passphrase = 
p12 = 

```

当需要替换其他配置时，只需要将对应的`passphrase`和`p12`数据复制粘贴到新的配置中去，就无需再次安装证书

配置文件的mitm字段样例：

```
[mitm]
# CA密码
passphrase =
# 证书
p12 =
# 跳过验证证书
skip_validating_cert = false
# 强制SNI域名
force_sni_domain_name = false
# 主机名
hostname = *.example.com, *.sample.com
# 当使用 Quantumult X 在 M 芯片的 Mac 设备上作为局域网网关时，使用下面的参数来 跳过某些特定设备的 mitm 需求
;skip_src_ip = 192.168.4.50, 92.168.4.51
# 当多个不同的 TCP 连接（非域名类请求）的目标 IP 不同，但这些连接的 TSL 握手 SNI 字段相同时，如需跳过其中某些连接的 MitM hostname 匹配过程，可使用👇参数。
;skip_dst_ip = 123.44.55.4
```

#### 主机名

```
[mitm]
hostname = abc.com
```

* 可使用通配符 `*` 和 `?` ；
* 可使用前缀 `-` 将特定主机名排除；
* 配置文件中，多个主机名可用 `,` 分割
* 单独的`*`符合作为主机名参数会匹配所有主机名

{% hint style="danger" %}
不要随意在mitm中添加主机名，更注意不要随意添加带有大量“\*”号的主机名
{% endhint %}

### **UI 查看 & 添加**

点击右下角风车进入「设置」 → 「MitM」区域-「主机名」

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FFOLsrjRWYz5v5bRB50S1%2FHOSTNAME.jpg?alt=media&amp;token=d8705c2d-2743-4b1b-9268-1b8b11149a5b" alt=""><figcaption><p>ui添加主机名步骤</p></figcaption></figure>

{% hint style="info" %}
&#x20;主机名 hostname= \*.example.com, \*.sample.com 这种添加进自己的配置文件的时候，只需要复制粘贴“*<mark style="color:green;">`*.example.com, *.sample.com`</mark>*”这一部分接在自己配置文件里面的hostname= xxxx后面即可，中间用","链接（英文格式的逗号）。

例如原来的是

hostname=1.1.1.1,2.2.2.2,3.3.3.3

之后：

hostname=1.1.1.1,2.2.2.2,3.3.3.3,*<mark style="color:green;">`*.example.com, *.sample.com`</mark>*

不要搞成：

hostname=1.1.1.1,2.2.2.2,3.3.3.3

hostname= \*.example.com, \*.sample.com&#x20;

{% endhint %}

后果就是：

下图就是一个有两个hostname字段导致的配置文件错误。

## 错误示范

<figure><img src="https://2561386001-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FAEWhRirZZwQJairpE2Z5%2Fuploads%2FAuon0DTdXKzVpsygh4iq%2Fsnagit014-mitm.png?alt=media&amp;token=714249cf-a694-43f7-8b0a-be7a3a2174fd" alt=""><figcaption><p>有两个hostname字段导致的错误</p></figcaption></figure>
