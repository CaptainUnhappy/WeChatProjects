// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  try {
  db.collection('random').add({
    // data 字段表示需新增的 JSON 数据
    data: {
      ran1: Math.round(Math.random()*5+1),
      ran2: Number((Math.random()*5+1).toFixed(0)),
      ran3: Math.round(Math.random()*5+1),
      time: new Date()
    }
  });
}catch(e){}

  return {
    add:'success'
  }
}