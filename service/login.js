const User = require('../models/user');
const drinkList = require('../models/drinkList');
const userServer = {};

userServer.insertUser = async (name, pass) => {
  let result = await User.insertMany({ name: name, pass: pass });
  return result;
}
userServer.regUser = async (name, pass) => {
  let result;
  //登录验证
  if (name && pass) {
    result = await User.findOne({ name: name, pass: pass });
  }else {
    //注册验证
    result = await User.findOne({ name: name});
  }
  return result;
}
userServer.getAllUser = async () => {
  let result = await User.find();
  return result;
}
userServer.getDrinkByNum = async (id) => {
  let result = await drinkList.findOne({ number: id });
  return result;
}
module.exports = userServer;