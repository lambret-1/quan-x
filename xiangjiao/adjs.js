let body = $response.body;
if (!body) $done({ body });

// 快速预判：不含关键词就不处理，直接返回
const needSplash = body.indexOf('splash-ad-0.gif') !== -1;
const needPopup  = body.indexOf('popSafariNotice') !== -1;

if (!needSplash && !needPopup) {
  return $done({ body });
}

// 只有命中才做正则替换
if (needSplash) {
  body = body.replace(
    /var\s+AL\s*=\s*\[\{pic:"static\/splash-ad-0\.gif"[\s\S]*?\}\];/,
    'var AL=[];'
  );
  body = body.replace(
    /AL\s*=\s*\[\{pic:"static\/splash-ad-0\.gif"[\s\S]*?\}\];/,
    'AL=[];'
  );
  body = body.replace(
    /new URL\("img1-BayM0rt0\.png",[^)]+\)\.href/g,
    '""'
  );
}

if (needPopup) {
  body = body.replace(
    /\(!t&&a\|\|t&&!a\)&&\(X\.value=!0\)/g,
    '(!t&&a||t&&!a)&&(X.value=!1)'
  );
}
console.log("🚀 [1] 脚本触发！");

$done({ body });