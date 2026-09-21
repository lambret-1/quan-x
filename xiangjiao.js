// ======================
// 功能：根据真实抓包修正版
// 会员解锁 / 去广告 / 用户信息修改
// ======================

(function() {
    console.log("🚀 [1] 脚本触发！");

    if (typeof $response === 'undefined' || $response === null) {
        console.log("❌ $response 未定义");
        $done(); return;
    }

    var 原始响应体 = $response.body;
    if (!原始响应体) {
        console.log("⚠️ 响应体为空");
        $done(); return;
    }
    console.log("📦 [2] Body 长度: " + 原始响应体.length);

    var contentType = $response.headers["Content-Type"] || "";
    var isJson = contentType.indexOf("json") !== -1 ||
                 (原始响应体.charAt(0) === "{" || 原始响应体.charAt(0) === "[");
    if (!isJson) {
        console.log("⚠️ 非 JSON，放行");
        $done(); return;
    }
    console.log("✅ [2.2] 是 JSON");

    // ====== 核心修改函数 ======
    function 执行全部修改(body) {
        console.log("👑 [4] 开始执行修改");

        // 确保 data 存在
        if (!body.data || typeof body.data !== "object" || Array.isArray(body.data)) body.data = {};
        var data = body.data;

        // 确保 uinfo / user 存在
        if (!data.uinfo || typeof data.uinfo !== "object" || Array.isArray(data.uinfo)) data.uinfo = {};
        if (!data.user  || typeof data.user  !== "object" || Array.isArray(data.user))  data.user  = {};

        // ================== 1. user 会员字段 ==================
        var user = data.user;
     user.uid  = 5569;
        user.isvip  = 1;
        user.gid    = "6";
        user.gicon  = "V6";
        user.sysgid = "6";
        user.dueday = "2125-09-17";
        user.duetime = "2125-09-17 23:59:59";
        user.goldcoin = 9999;
        user.gold_bean = 9999;
        user.nickname = "至尊VIP";
        user.username = "至尊VIP";
        console.log("✅ 已修改 user：isvip/gid/gicon/sysgid/到期时间/金币/昵称");

var uinfo = data.uinfo;
uinfo.curr_group = {

            gname: "尊贵VIP",
            minup: "1000000"};
        // ================== 2. uinfo 会员与次数 ==================
       /* var uinfo = data.uinfo;
uinfo.uid  = 5569;
        uinfo.goldcoin = "999";
        uinfo.play_daily_remainders          = 999;
        uinfo.minivod_play_daily_remainders  = 999;
        uinfo.down_daily_remainders          = 999;
        uinfo.minivod_down_daily_remainders  = 999;
        uinfo.next_upgrade_need              = 0;
        uinfo.next_group                     = null;

        // curr_group 原本是 null，需要新建
        user.curr_group = {

            gname: "尊贵VIP",
            minup: "1000000"
        };
        console.log("✅ 已修改 uinfo：金币/次数/curr_group");*/

        // ================== 3. xxx_api_auth（在 data 下！）==================
        if (data.xxx_api_auth !== undefined) {
            data.xxx_api_auth = "";
            console.log("✅ 已清空 data.xxx_api_auth");
        }

        // ================== 4. 去广告字段 ==================
        if (data.globalData !== undefined) {
            data.globalData = {};
            console.log("✅ 已清除 globalData");
        }

        if (data.appver !== undefined) {
            data.appver = {};
            console.log("✅ 已清除 appver");
        }
        if (data.pcsliderows !== undefined) {
            data.pcsliderows = {};
            console.log("✅ 已清除 pcsliderows");
        }

        // ================== 5. 顶层错误码 ==================
        //body.retcode = 0;
        //body.errmsg  = "";
        console.log("✅ 已重置 retcode / errmsg");

        console.log("👑 [5] 修改函数执行完毕");
        return body;
    }

    // ====== 主流程 ======
    try {
        var body = JSON.parse(原始响应体);
        console.log("✅ [3] JSON 解析成功，data 字段: " + (body.data ? Object.keys(body.data).join(", ") : "无 data"));

        body = 执行全部修改(body);

        console.log("🎉 [6] 脚本执行成功，准备返回");
        $done({ body: JSON.stringify(body) });
    } catch (e) {
        console.log("❌ [异常] " + e + "，原样放行");
        $done({ body: 原始响应体 });
    }
})();
