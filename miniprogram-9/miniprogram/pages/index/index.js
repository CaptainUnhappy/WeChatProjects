//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    formid: ""
  },

  setPhoto:function(){
    wx.requestSubscribeMessage({
      tmplIds: ['oQdL55PsNZPEvTpxvE-XCddD-O-k'],
      success (res) {
        console.log(res);
      },
      fail (fail) {
        console.log(fail);
      }
    })
  },

  
})