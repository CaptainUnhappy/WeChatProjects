// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env:"testcloud-7gu6zcdk76510172"
    })
  },
  globalData: {
    userInfo: null
  }
})
