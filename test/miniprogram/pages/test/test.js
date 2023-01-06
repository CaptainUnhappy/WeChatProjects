// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //  textname:[
    //   111,222,333,444
    // ],
    // textn:[
    //   {ti:"pages/images/01.png",tn:"111"},
    //   {ti:"miniprogram/images/01.png",tn:"222"}
    // ]

   
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'000',
        url:'demo0'
      },
      {
        name:'111',
        url:'demo1',
        isSplot:true
      },
      {
        name:'222',
        url:'demo2'
      },
      {
        name:'333',
        url:'demo3'
      }
      
    ]

  },

  /**
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