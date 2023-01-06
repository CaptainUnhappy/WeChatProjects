// pages/demo/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewLeft:0,
    cssw:200,
    cssh:200,
    suiji:'0',

    num:1,
    


    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName')
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

  },

  changeLocation(){
    var viewLeft=this.data.viewLeft;
    viewLeft+=5;
    this.setData({
      viewLeft:viewLeft
    })
  },

  changeWidthHeight(){

    var cssw=this.data.cssw;
    if(cssw-5>=20){cssw-=5;}
    
    var cssh=this.data.cssh;
    if(cssh-5>=20){cssh-=5;}
    
    var num=this.data.num;
    num+=1;

    this.setData({
      cssw:cssw,
      cssh:cssh,
      num:num,
    })
  },


  randomNumber: function () {
    var random = Math.floor(Math.random() * 10);
    this.setData({
      suiji: random
    })},
    


  

})
