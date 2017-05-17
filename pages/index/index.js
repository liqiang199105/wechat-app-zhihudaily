// ============================================================================
// home.js
// ============================================================================

var app = getApp()

Page({
  // 数据
  data: {
    knowledges: [],
    currentNavtab: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
  },

  // 函数
  bindViewTap: function () {  //事件处理函数
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.larkin1991.com/json/list/page' + 1,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
           knowledges: res.data
         })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },


});
