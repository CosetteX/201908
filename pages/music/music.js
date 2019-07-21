// pages/music/music.js
Page({
  data: {
    poster: 'http://i1.hdslb.com/bfs/archive/89252dadd2525f8190485a069f73cdf3d783cabc.jpg',
    name: '普通disco',
    author: '洛天依/言和',
    src: 'https://qcloudbbs-10019892.cos.ap-shanghai.myqcloud.com/%E6%99%AE%E9%80%9ADisco%20-%20%E6%B4%9B%E5%A4%A9%E4%BE%9D%20_%20%E8%A8%80%E5%92%8C.mp3',
  },
  next() {
    var i = 0;
    var array = [{
      poster: 'http://i1.hdslb.com/bfs/archive/89252dadd2525f8190485a069f73cdf3d783cabc.jpg',
      name: '普通disco',
      author: '洛天依/言和',
      src: 'https://qcloudbbs-10019892.cos.ap-shanghai.myqcloud.com/%E6%99%AE%E9%80%9ADisco%20-%20%E6%B4%9B%E5%A4%A9%E4%BE%9D%20_%20%E8%A8%80%E5%92%8C.mp3',
    },
    {
      poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
      name: '此时此刻',
      author: '许巍',
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    }]
    i++
    this.setData({
      poster: array[i].poster,
      name: array[i].name,
      author: array[i].author,
      src: array[i].src
    })
  },

/*
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})