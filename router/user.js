const express = require("express");
const router = express.Router();
const userServe = require("../service/login");
const { resData } = require("../utils/common");

// 注册
router.post('/login', async (req, res) => {
  const { name , pass} = req.body;
  if(!name || !pass){
    return res.json(resData.paramError())
  }
  let result = await userServe.regUser(name);
  //没有该用户，则注册
  let newUser;
  if (!result) {
    newUser = await userServe.insertUser(name, pass)
  }else {
    return res.json(resData.resError("该用户已存在"))
  }
  return res.json(resData.formServiceData(newUser));
})
//登录
router.post('/logon', async (req, res) => {
  const { name, pass } = req.body;
  let result = await userServe.regUser(name,pass);
  console.log(result,8888)
})
router.get('/allUser', async (req, res) => {
  let result = await userServe.getAllUser();
  return res.json(resData.formServiceData(result));
})
router.get('/getDrinkDetail', async (req, res) => {
  let drinkId = req.query.id;
  let result = await userServe.getDrinkByNum(drinkId);
  return res.json(result);
})

module.exports = router;