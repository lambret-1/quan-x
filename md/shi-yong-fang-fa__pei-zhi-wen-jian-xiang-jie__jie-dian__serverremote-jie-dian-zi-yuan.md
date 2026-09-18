> For the complete documentation index, see [llms.txt](https://qx.atlucky.me/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://qx.atlucky.me/shi-yong-fang-fa/pei-zhi-wen-jian-xiang-jie/jie-dian/serverremote-jie-dian-zi-yuan.md).

# server\_remote（节点资源）

引用（订阅）的节点（也就是常说的机场订阅之类的），对应配置文件的 <mark style="color:red;">\[server\_remote]</mark> 部分，标准写法如下：

```
[server_remote]
# 远程服务器订阅模块，可直接订阅SSR，SS链接，以及Quantumult X格式的vmess/trojan/https订阅
https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server.txt, tag=示范订阅1(可删除), update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/crossutility/Quantumult-X/master/server-complete.txt, tag=示范订阅2(可删除), enabled=true

# 支持本地/iCloud的节点文件，位于Quantumult X/Profiles路径下
servers.txt, tag=本地服务器, enabled=false

```

{% hint style="info" %}
"tag" 跟 "enabled" 为可选参数，分别表示 “标签”及“开启状态”.

update-interval 为更新时间参数，单位 秒, 默认更新时间为 24*60*60=86400 秒，也就是24小时.

opt-parser=true/false 用于控制是否对本订阅 开启资源解析器，不写或者 false 表示不启用解析器;
{% endhint %}

添加订阅的步骤见[导入订阅](/shi-yong-fang-fa.md#dao-ru-ding-yue)

{% hint style="info" %}
通过[配置片段](/shi-yong-fang-fa/pei-zhi-pian-duan.md)添加的节点，也会显示在<mark style="color:red;">\[server\_local]</mark>字段下。
{% endhint %}
