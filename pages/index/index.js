//index.js
//获取应用实例
const app= getApp()
Page({
  data:{
    defaultSize: 'default',
  },
  jumpMusic:function(){
    wx.navigateTo({
      url:'../music/music'
    })
  },
  bindViewTap: {},

})
