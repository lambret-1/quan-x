[rewrite_local]

^https?://h5\.xxoox20\.org/api/init url script-response-body https://raw.githubusercontent.com/lambret-1/quan-x/main/xiangjiao/ad.js

^https?://h5\.xxoox20\.org/api/index url script-response-body https://raw.githubusercontent.com/lambret-1/quan-x/main/xiangjiao/ad1.js


[MITM]
hostname = %APPEND% h5.xxoox20.org