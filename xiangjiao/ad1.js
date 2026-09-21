let obj = JSON.parse($response.body);

if (obj && obj.data) {
  const d = obj.data;
  d.c_vodrows.isvip="0";
  // PC / 移动端轮播图，基本都是广告
  if (Array.isArray(d.pcsliderows)) d.pcsliderows = [];
  if (Array.isArray(d.mbsliderows)) d.mbsliderows = [];
  if (Array.isArray(d.sliderows))   d.sliderows   = [];

  // v2sliderows 里既有站内专题(special.detail)，也有外链广告(web.url)
  // 只去掉外链广告，保留站内专题
  if (Array.isArray(d.v2sliderows)) {
    d.v2sliderows = d.v2sliderows.filter(item => item && item.scene !== 'web.url');
  }

  // 如果还有单独的外链广告字段，一并清掉
  ['adrows','adrows2','bannerads','bannerrows'].forEach(k => {
    if (Array.isArray(d[k])) d[k] = [];
  });
}

console.log("🚀 清除成功");
$done({ body: JSON.stringify(obj) });