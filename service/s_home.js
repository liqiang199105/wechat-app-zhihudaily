
module.exports.getBannerData = getBannerData;
module.exports.getKonwledgesData = getKonwledgesData;

// ============================================================================
// 首页banner数据
// ============================================================================
var banners = {
    "status": 0,
    "msg": "",
    "data": [
        {
            "newsId": 2,
            "image": "https://img.cdn.icaibei.net/banner/201612/banner-suyu.jpg!app_banner1",
            "data": "{\"liveUrl\":\"https://m.icaibei.net/course/home?courseId=2\"}",
            "title": "苏渝"
        },
        {
            "newsId": 2,
            "image": "https://img.cdn.icaibei.net/banner/201612/banner-duzijian2.jpg!app_banner1",
            "data": "{\"liveUrl\":\"https://m.icaibei.net/course/home?courseId=3\"}",
            "title": "杜子建"
        },
        {
            "newsId": 2,
            "image": "https://img.cdn.icaibei.net/banner/banner-qiuxiaohua&dongfan.png!app_banner1",
            "data": "{\"liveUrl\":\"https://m.icaibei.net/app/guestLive.html\"}",
            "title": "邱晓华&董藩推广"
        }
    ]
}

function getBannerData() {
    return banners.data;

    // return wx.request({
    //   url: 'https://api.icaibei.net/live/banner',
    //   data: {},
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   header: { // 设置请求的 header
    //     'Content-Type': 'application/json'
    //   }, 
    //   success: function(res){
    //      console.log(res.data);
    //      return res.data;
    //   },
    //   fail: function() {
    //   },
    //   complete: function() {
    //   }
    // })
}

// ============================================================================
// 首页知识库数据
// ============================================================================
var knowledges = {
    "status": 0,
    "msg": "",
    "data": [
        {
            "id": 1,
            "title": "什么是股票",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/af23cbbcb7362e27f8c2ca76ee21a24c.png",
            "desc": "股票（stock）是股份公司发行的所有权凭证，是股份公司为筹集资金而发行给各个股东作为持股凭证并借以取得股息和红利的一种有价证券。每股股票都代表股东对企业拥有一个基本单位的所有权。每支股票背后都有一家上市公司。同时，每家上市公司都会发行股票的。",
            "count": "1"
        },
        {
            "id": 2,
            "title": "什么是印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/af23cbbcb7362e27f8c2ca76ee21a24c.png",
            "desc": "净资产收益率ROE(Rate of Return on Common Stockholders’ Equity)，净资产收益率又称股东权益报酬率/净值报酬率/权益报酬率/权益利润率/净资产利润率，是净利润与平均股东权益的百分比，是公司税后利润除以净资产得到的百分比率，该指标反映股东权益的收益水平，用以衡量公司运用自有资本的效率。指标值越高，说明投资带来的收益越高。该指标体现了自有资本获得净收益的能力。",
            "count": "1"
        }
    ]
}

function getKonwledgesData() {
    return knowledges.data;

    // return wx.request({
    //   url: 'https://api.icaibei.net/live/banner',
    //   data: {},
    //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   header: { // 设置请求的 header
    //     'Content-Type': 'application/json'
    //   }, 
    //   success: function(res){
    //      console.log(res.data);
    //      return res.data;
    //   },
    //   fail: function() {
    //   },
    //   complete: function() {
    //   }
    // })
}