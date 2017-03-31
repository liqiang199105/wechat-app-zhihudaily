
module.exports.getBannerData = getBannerData;
module.exports.getKonwledgesData = getKonwledgesData;
module.exports.getKnowDetail = getKnowDetail; 

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
            "title": "股票",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/ca4cc9c31c90a9f0b3984fdb7af501cd.png",
            "desc": "股票（stock）是股份公司发行的所有权凭证，是股份公司为筹集资金而发行给各个股东作为持股凭证并借以取得股息和红利的一种有价证券。",
            "count": "1"
        },
        {
            "id": 2,
            "title": "印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/ca4cc9c31c90a9f0b3984fdb7af501cd.png",
            "desc": "印花税是对经济活动和经济交往中设立、领受具有法律效力的凭证的行为所征收的一种税。因采用在应税凭证上粘贴印花税票作为完税的标志而得名。",
            "count": "1"
        },{
            "id":3,
            "title": "创业板",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/ca4cc9c31c90a9f0b3984fdb7af501cd.png",
            "desc": "创业板，又称二板市场（Second-board Market）即第二股票交易市场，是与主板市场（Main-Board Market）不同的一类证券市场，专为暂时无法在主板上市的创业型企业、中小企业和高科技产业企业等需要进行融资和发展的企业提供融资途径和成长空间的证券交易市场.",
            "count": "1"
        },{
            "id": 2,
            "title": "印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/ca4cc9c31c90a9f0b3984fdb7af501cd.png",
            "desc": "印花税是对经济活动和经济交往中设立、领受具有法律效力的凭证的行为所征收的一种税。因采用在应税凭证上粘贴印花税票作为完税的标志而得名。",
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

var detail = {
    "title": "股票",
    "desc" : "",
    "cover": "https://img.cdn.icaibei.net/avatar/201703/c22c277ffb8b1f1f55c8ad021b5ffe49.jpg",
    "body":"概念编辑股票是一种有价证券，是股份公司在筹集资本时向出资人发行的股份凭证，代表着其持有者（即股东）对股份公司的所有权，购买股票也是购买企业生意的一部分，即可和企业共同成长发展。这种所有权为一种综合权利，如参加股东大会、投票表决、参与公司的重大决策、收取股息或分享红利差价等，但也要共同承担公司运作错误所带来的风险。获取经常性收入是投资者购买股票的重要原因之一，分红派息是股票投资者经常性收入的主要来源。一级市场一级市场（Primary Market）也称为发行市场（Issuance Market），它是指公司直接或通过中介机构向投资者出售新发行的股票的市场。所谓新发行的股票包括初次发行和再发行的股票，前者是公司第一次向投资者出售的原始股，后者是在原始股的基础上增加新的份额。一级市场的运作过程"

}
function getKnowDetail() {
    return detail;
}

