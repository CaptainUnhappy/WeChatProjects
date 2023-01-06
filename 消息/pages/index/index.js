const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  }
  
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  }

let thing1='未填入名称',thing2='未填入说明',time4=formatTime(new Date())

Page({

  data:{
   openid:'',
  //  thing1:'',
  //  thing2:''
  // name : ''

  msgid:['dbzyYIAQweondeUltpOLgxnj-3rROkpZQs9YREX1KwY'],


  },

  //获取用户openid
  getopenid(){
    wx.cloud.callFunction({
      name:"getOPENID"
    }).then(res=>{
      console.log("获取成功",res)
      this.setData({
        openid:res.result.openid
      })
    }).catch(res=>{
      console.log("获取失败",res)
    })
  },

  //获取用户授权
  shouquan(){
    wx.requestSubscribeMessage({
      tmplIds: this.data.msgid,
      success(res){
        console.log("授权成功",res)
      },
      fail(res){
        console.log("授权失败",res)
      }
    })
  },

  //单个用户发送消息
  sendOne(){
      console.log(time4)
    if(thing1==null||thing1==''){
      wx.showToast({
        icon:'none',
        title: '请输入任务名称',
      })
      return
    }
    wx.cloud.callFunction({
      name:"fasong",
      data:{
        openid:this.data.openid,
        thing1:thing1,
        thing2:thing2,
        time4:time4
      }
    }).then(res=>{
      if(res.result.errCode==0){
        console.log("发送成功",res)
      }else{
      //console.log("res:",res)
      console.log("result:",res.result)
      }
    }).catch(res=>{
      console.log("发送失败",res)
    })
  },

  //获取输入信息
  getThing1(e){
    console.log(e.detail.value)
    thing1=e.detail.value
  },

  getThing2(e){
    console.log(e.detail.value)
    thing2=e.detail.value
  },
//   getTime4(e){
//     console.log(e.detail.value)
//     time4=e.detail.value
//   },


  inputValue: function (event) {
    this.setData({
      openid: event.detail.value
    })
    console.log(this.data)
  },

  //一键获取用户openid 权限
  getIDandShouquan(){

    wx.requestSubscribeMessage({//授权发送 start
      tmplIds: this.data.msgid,
      success(res){
        console.log("授权",res)
        if(res['dbzyYIAQweondeUltpOLgxnj-3rROkpZQs9YREX1KwY'] ==='accept'){//用户是否同意
          console.log("用户允许")
        }else console.log("用户取消")
        },fail(res){
          console.log("授权失败",res)
        }
      })                              //授权发送 end
          wx.cloud.callFunction({   //获取openid start
            name:"getOPENID"
          }).then(res=>{
            console.log("获取成功",res)
            this.setData({
              openid:res.result.openid,
            })
          }).catch(res=>{
            console.log("获取失败",res)
          })                        //获取openid end
      

  },


  //一键单个用户发送消息
  SendOne(){
  
    wx.requestSubscribeMessage({//授权发送 start
      tmplIds: this.data.msgid,
      success(res){
        console.log("授权",res)
        if(res['dbzyYIAQweondeUltpOLgxnj-3rROkpZQs9YREX1KwY'] ==='accept'){//用户是否同意
          console.log("用户允许")

          wx.cloud.callFunction({   //获取openid start
            name:"getOPENID"
          }).then(res=>{
            console.log("获取成功",res)

            wx.cloud.callFunction({ //发送消息 start
              name:"fasong",
              data:{
              openid:res.result.openid,
              }
            }).then(res=>{
              console.log("发送",res)
            }).catch(res=>{
              console.log("发送失败",res)
            })                      //发送消息 end

          }).catch(res=>{
            console.log("获取失败",res)
          })                        //获取openid end
      }else console.log("用户取消")
      },fail(res){
        console.log("授权失败",res)
      }
    })                              //授权发送 end

  },
 
  // 网页加载成功时候触发此事件
  bindload(res) {
    
    console.log(res, res.detail)
  },


  // 网页加载失败的时候触发此事件
  binderror(err) {

    console.log(err, err.detail)
  },



  navigate() { 
    wx.navigateTo({url: '../pay/index'});
  },

  getdb(){
  const db = wx.cloud.database()
  db.collection('todo').get({
  success: function(res) {
    console.log(res.data)
  }
})
  }

})
