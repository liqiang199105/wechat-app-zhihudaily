// ============================================================================
// home.js
// ============================================================================

var homeService = require('../../service/s_home.js')

var app = getApp()

Page({
  // 数据
  data: {
    banners: [],
    knowledges: [],
    currentNavtab:0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
  },
 
  // 函数
  bindViewTap: function() {  //事件处理函数
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    var banners = homeService.getBannerData();
    var knowledges = homeService.getKonwledgesData();
    console.log(banners);
    console.log(knowledges);
    this.setData({
      banners: banners,
      knowledges:knowledges
    });
  },

  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


});
