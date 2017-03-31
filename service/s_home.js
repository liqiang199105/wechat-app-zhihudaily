
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
            "title": "股票",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/25ea59394c5537e268b6eb2f6bf02df3.png",
            "desc": "股票（stock）是股份公司发行的所有权凭证，是股份公司为筹集资金而发行给各个股东作为持股凭证并借以取得股息和红利的一种有价证券。",
            "count": "1"
        },
        {
            "id": 2,
            "title": "印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/25ea59394c5537e268b6eb2f6bf02df3.png",
            "desc": "印花税是对经济活动和经济交往中设立、领受具有法律效力的凭证的行为所征收的一种税。因采用在应税凭证上粘贴印花税票作为完税的标志而得名。",
            "count": "1"
        },{
            "id": 2,
            "title": "创业板",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/e32a4b3d6eb7646c5577986668273986.png",
            "desc": "创业板，又称二板市场（Second-board Market）即第二股票交易市场，是与主板市场（Main-Board Market）不同的一类证券市场，专为暂时无法在主板上市的创业型企业、中小企业和高科技产业企业等需要进行融资和发展的企业提供融资途径和成长空间的证券交易市场.",
            "count": "1"
        },{
            "id": 2,
            "title": "印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/4be487cd30336cf22d20afba1fbad03a.png",
            "desc": "印花税是对经济活动和经济交往中设立、领受具有法律效力的凭证的行为所征收的一种税。因采用在应税凭证上粘贴印花税票作为完税的标志而得名。",
            "count": "1"
        },{
            "id": 2,
            "title": "印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/4be487cd30336cf22d20afba1fbad03a.png",
            "desc": "印花税是对经济活动和经济交往中设立、领受具有法律效力的凭证的行为所征收的一种税。因采用在应税凭证上粘贴印花税票作为完税的标志而得名。",
            "count": "1"
        },{
            "id": 2,
            "title": "印花税",
            "cover": "https://img.cdn.icaibei.net/avatar/201703/4be487cd30336cf22d20afba1fbad03a.png",
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