// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '云函数',
      tip: '安全、免鉴权运行业务代码',
      showItem: false,
      item: [{
        title: '获取OpenId',
        page: 'getOpenId'
      },
      //  {
      //   title: '微信支付'
      // },
       {
        title: '生成小程序码',
        page: 'getMiniProgramCode'
      },
      // {
      //   title: '发送订阅消息',
      // }
    ]
    }, {
      title: '数据库',
      tip: '安全稳定的文档型数据库',
      showItem: false,
      item: [{
        title: '创建集合',
        page: 'createCollection'
      }, {
        title: '更新记录',
        page: 'updateRecord'
      }, {
        title: '查询记录',
        page: 'selectRecord'
      }, {
        title: '聚合操作',
        page: 'sumRecord'
      }]
    }, {
      title: '云存储',
      tip: '自带CDN加速文件存储',
      showItem: false,
      item: [{
        title: '上传文件',
        page: 'uploadFile'
      }]
    }, {
      title: '云托管',
      tip: '不限语言的全托管容器服务',
      showItem: false,
      item: [{
        title: '部署服务',
        page: 'deployService'
      }]
    }],
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false,



    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownDay: 0,
    countDownHour: 0,
    countDownMinute: 0,
    countDownSecond: 0,


    Hours:'',
    Minutes:'',

    date: new Date().getFullYear()+'-'+(new Date().getUTCMonth()+1)+'-'+(new Date().getUTCDate()+1),
    time: '00:00',

    deadline:"2022-4-8 0:00",
    //"2021-11-19 00:00"

    // test:2,

    clock:''
  },
  onLoad: function () {
    count_down(this);
  },


  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index;
    const powerList = this.data.powerList;
    powerList[index].showItem = !powerList[index].showItem;
    if (powerList[index].title === '数据库' && !this.data.haveCreateCollection) {
      this.onClickDatabase(powerList);
    } else {
      this.setData({
        powerList
      });
    }
  },

  onChangeShowEnvChoose() {
    wx.showActionSheet({
      itemList: this.data.envList.map(i => i.alias),
      success: (res) => {
        this.onChangeSelectedEnv(res.tapIndex);
      },
      fail (res) {
        console.log(res.errMsg);
      }
    });
  },

  onChangeSelectedEnv(index) {
    if (this.data.selectedEnv.envId === this.data.envList[index].envId) {
      return;
    }
    const powerList = this.data.powerList;
    powerList.forEach(i => {
      i.showItem = false;
    });
    this.setData({
      selectedEnv: this.data.envList[index],
      powerList,
      haveCreateCollection: false
    });
  },

  jumpPage(e) {
    wx.navigateTo({
      url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
    });
  },

  onClickDatabase(powerList) {
    wx.showLoading({
      title: '',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.selectedEnv.envId
      },
      data: {
        type: 'createCollection'
      }
    }).then((resp) => {
      if (resp.result.success) {
        this.setData({
          haveCreateCollection: true
        });
      }
      this.setData({
        powerList
      });
      wx.hideLoading();
    }).catch((e) => {
      console.log(e);
      this.setData({
        showUploadTip: true
      });
      wx.hideLoading();
    });
  },

//    function (a) {
// var that = this;
// function nowTime() {
// var dateTime = new Date();
// var timestamp = Date.parse(new Date());
// var serverTime = new Date(a);
// var difference = serverTime - dateTime.getTime();
// var nMS = difference;
// // var myD = Math.floor(nMS / (1000 * 60 * 60 * 24)); //天
// var myH = Math.floor(nMS / (1000 * 60 * 60)) % 24; //小时
// var myM = Math.floor(nMS / (1000 * 60)) % 60; //分钟
// var myS = Math.floor(nMS / 1000) % 60; //秒
// if (myH >= 0) {
// var str = myH + "小时" + myM + "分" + myS + "秒";
// } else {
// var str = "已结束！";
// clearInterval(timer);
// }
// console.log(dateTime);
// console.log(str);
// console.log(timestamp);
// // this.xianZai();
// // that.setData({
// // countDown: str,
// // });
// return str;

// // var wearList = that.data.wearList
// // wearList[i].date = str;
// var wearList = that.data.wearList
// for (var i = 0; i < wearList.length; i++) {
// wearList[i].date = str;
// }
// that.setData({
// wearList: wearList
// })
// }
// nowTime();
// var timer = setInterval(nowTime, 1000);

// // return nowTime()
// },


//事件处理函数
bindViewTap: function() {
  wx.navigateTo( {
   url: '../logs/logs'
  })
 },

 deadlinechange:function(){
  this.setData({
    deadline:this.data.date+" "+this.data.time
  })
  console.log(this.data.deadline)
  this.onLoad()
 },


 onShow: function() {

  // this.setData({
  //   deadline:this.data.date+" "+this.data.time
  // })
  // console.log(this.data.date)

//   var nTime=new Date(Date.now());//个位数加零
//   // console.log(nTime.getHours());
//   // console.log(new Date().getDate);
//   if (nTime.getHours() < 10) {  
//   this.setData({
//     Hours : "0" + nTime.getHours()
//   })
//   }else {
//     this.setData({
//     Hours : nTime.getHours()
//   })
//   }
//   if (nTime.getMinutes() < 10) {  
//   this.setData({
//     Minutes : "0" + nTime.getMinutes()
//   })
//   }else {
//     this.setData({
//     Minutes : nTime.getMinutes()
//   })
//   }

  // console.log("addzero");}
  this.setData( {
   windowHeight: wx.getStorageSync( 'windowHeight' )
  });
  
  var itime=this.data.deadline;                 //目标标准时间
  // console.log(itime)
  var totalSecond = 
      Date.parse(new Date(itime)) / 1000
      - Date.parse(new Date()) / 1000;          //剩余秒
  console.log(new Date(itime));                 //目标标准时间  定值
  console.log(Date.parse(new Date(itime))/1000);//目标时间  秒  定值
  console.log(Date.parse(new Date()) / 1000);   //现在时间  秒  变量  涨
  console.log(totalSecond);                     //剩余时间  秒  变量  降
  var interval = setInterval(function () {
   // 秒数
   var second = totalSecond;
   // 天数位
   var day = Math.floor(second / 3600 / 24);
   var dayStr = day.toString();
   if (dayStr.length == 1) dayStr = '0' + dayStr;
   // 小时位
   var hr = Math.floor((second - day * 3600 * 24) / 3600);
   var hrStr = hr.toString();
   if (hrStr.length == 1) hrStr = '0' + hrStr;
   // 分钟位
   var min = Math.floor((second - day * 3600 *24 - hr * 3600) / 60);
   var minStr = min.toString();
   if (minStr.length == 1) minStr = '0' + minStr;
   // 秒位
   var sec = second - day * 3600 * 24 - hr * 3600 - min*60;
   var secStr = sec.toString();
   if (secStr.length == 1) secStr = '0' + secStr;
   this.setData({
    countDownDay: dayStr,
    countDownHour: hrStr,
    countDownMinute: minStr,
    countDownSecond: secStr,
   });
   totalSecond--;
   if (totalSecond < 0) {
    clearInterval(interval);
    wx.showToast({
     title: '活动已结束',
    });
    this.setData({
     countDownDay: '0',
     countDownHour: '0',
     countDownMinute: '0',
     countDownSecond: '0',
    });
   }
  }.bind(this), 1000);
 },
 //cell事件处理函数
//  bindCellViewTap: function (e) {
//   var id = e.currentTarget.dataset.id;
//   wx.navigateTo({
//    url: '../babyDetail/babyDetail?id=' + id
//   });
//  }

bindTimeChange: function (event){
  this.setData({ time: event.detail.value })
},

bindDateChange: function (event) {
  this.setData({
    date: event.detail.value
  })
},



});

/** 
 * 需要一个目标日期，初始化时，先得出到当前时间还有剩余多少秒
 * 1.将秒数换成格式化输出为XX天XX小时XX分钟XX秒 XX
 * 2.提供一个时钟，每10ms运行一次，渲染时钟，再总ms数自减10
 * 3.剩余的秒次为零时，return，给出tips提示说，已经截止
 */

// 定义一个总毫秒数，以一分钟为例。TODO，传入一个时间点，转换成总毫秒数
var total_micro_second = 10000 //10s

/* 毫秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }, 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位
  // var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return hr + ":" + min + ":" + sec
  //  + " " + micro_sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}
