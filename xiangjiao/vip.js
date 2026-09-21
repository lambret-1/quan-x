// ======================
// 情况 A 完整版：函数返回固定 JSON，并交给 $done 返回
// ======================

(function() {
    console.log("🚀 [1] 脚本触发！");

    // ====== 函数定义：返回这段固定 JSON ======
    function getData(body) {
        return {
            "retcode": 0,
            "errmsg": "",
            "data": {
                "signed": 6,
               "uinfo": {
                    "goldcoin": "6",
                    "down_daily_remainders": 9988,

                    
"minivod_play_daily_remainders": 999,
                    "minivod_down_daily_remainders": 200,
                    "gold_bean": 1,
                    "next_upgrade_need": 2000000,
                    "play_daily_remainders": 999,
                    "next_group": {
                        "minup": "2000000",
                        "gicon": "V7",
                        "gid": "7",
                        "gname": "禁止发言"
                    }
                },
                "groups": [
                    {
                        "gname": "游客",
                        "gicon": "V0",
                        "play_daynum": 100,
                        "minivod_play_daynum": 110,
                        "minup": "1000000",
                        "minivod_down_daynum": 100,
                        "down_daynum": 1000,
                        "comment_daynum": 3
                    },
                    {
                        "gname": "VIP1",
                        "gicon": "V1",
                        "play_daynum": 110,
                        "minivod_play_daynum": 160,
                        "minup": "0",
                        "minivod_down_daynum": 150,
                        "down_daynum": 3,
                        "comment_daynum": 1
                    },
                    {
                        "gname": "VIP2",
                        "gicon": "V2",
                        "play_daynum": 16,
                        "minivod_play_daynum": 80,
                        "minup": "1",
                        "minivod_down_daynum": 80,
                        "down_daynum": 6,
                        "comment_daynum": 2
                    },
                    {
                        "gname": "VIP3",
                        "gicon": "V3",
                        "play_daynum": 25,
                        "minivod_play_daynum": 100,
                        "minup": "3",
                        "minivod_down_daynum": 100,
                        "down_daynum": 12,
                        "comment_daynum": 3
                    },
                    {
                        "gname": "VIP4",
                        "gicon": "V4",
                        "play_daynum": 40,
                        "minivod_play_daynum": 150,
                        "minup": "6",
                        "minivod_down_daynum": 150,
                        "down_daynum": 30,
                        "comment_daynum": 4
                    },
                    {
                        "gname": "荣誉VIP",
                        "gicon": "V5",
                        "play_daynum": 999,
                        "minivod_play_daynum": 999,
                        "minup": "10",
                        "minivod_down_daynum": 200,
                        "down_daynum": 50,
                        "comment_daynum": 5
                    },
                    {
                        "gname": "尊贵VIP",
                        "gicon": "V6",
                        "play_daynum": 999,
                        "minivod_play_daynum": 999,
                        "minup": "1000000",
                        "minivod_down_daynum": 200,
                        "down_daynum": 200,
                        "comment_daynum": 50
                    },
                    {
                        "gname": "禁止发言",
                        "gicon": "V7",
                        "play_daynum": 0,
                        "minivod_play_daynum": 0,
                        "minup": "2000000",
                        "minivod_down_daynum": 0,
                        "down_daynum": 0,
                        "comment_daynum": 0
                    }
                ],
                "user": {
                    "dueday": "10000天后过期",
                    "sysgid": "6",
                    "newmsg": "0",
                    "nickname": "至尊VIP",
                    "duetime": "2056-09-21 17:52:43",
                    "gold_bean": 888888,
                    "gids": 888888,
                    "mobi": "18866668888",
                    "gicon": "V6",
                    "avatar_url": "https://pvp.qq.com/favicon.ico",
                    "goldcoin": 16888,
                    "gender": 0,
                    //"uid": "25011184",
                   // "uniqkey": "M0D7Q0",
                    "email": "8888@qq.com",
                    "isvip": 1,
                    "gid": "6",
                    "avatar": "",
                    "recommend_total": 188,
                    "regtime": "20