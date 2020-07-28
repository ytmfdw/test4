// 云函数入口函数
exports.main = async (event, context) => {
 var data = {
    "data":[
      {
        "_openid": event.userInfo.openId
       }
    ]
  }
  return data;
}