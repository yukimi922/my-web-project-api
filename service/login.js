const User = require('../models/user');
const drinkList = require('../models/drinkList');
const userServer = {};

userServer.insertUser = async () => {
    let a = await User.insertMany({name: "Michelle", email: "123@qq.com"});
    return a;
}
userServer.regUser = async (name,pass) => {
    let result = await User.findOne({name: name,pass: pass});
    return result;
}
userServer.getAllUser = async () =>{
    let result = await User.find();
    return result;
}
userServer.getDrinkByNum = async (id)=>{
    let result = await drinkList.findOne({number: id});
    return result;
}
module.exports = userServer;