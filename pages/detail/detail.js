
var homeService = require('../../service/s_home.js')

Page({
  data: {
    art: {},
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '详情页'
    })
  },
  onLoad(options) {
    console.log(options)
    var detail = homeService.getKnowDetail()
    this.setData({
      art : detail
    })
  },
});