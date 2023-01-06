// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ // 初始化云开发环境
  env: cloud.DYNAMIC_CURRENT_ENV // 当前环境的常量
})

// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const result = await cloud.openapi.subscribeMessage.send({
      touser:event.openid,
      page:'pages/index/index',
      data:{
        thing1:{
          value:event.thing1
        },
        thing2:{
          value:event.thing2
        },
        time4:{
            value:event.time4
          },
      },
      templateId:'dbzyYIAQweondeUltpOLgxnj-3rROkpZQs9YREX1KwY'
    })
    console.log(result)
    return result
  }catch(err){
    console.log(err)
    return err
  }
}