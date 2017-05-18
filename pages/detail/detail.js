
Page({
  data: {
    art: {},
    title:"详情页"
  },
  onReady(options) {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  onLoad(options) {
    console.log("id" + options.id)
    var that = this
    wx.request({
      url: 'https://www.larkin1991.com/json/detail/' + options.id,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          art: res.data
        })
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
  onShareAppMessage: function (options) {
    return {
      title: art.topic,
      path: '/pages/detail?id=' + options.id
    }
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
});