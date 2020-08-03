const express = require('express');
const router = express.Router();
const userServe = require('../service/login');


router.post('/login', async (req,res) => {
  const { user , pass} = req.body;
  let result = await userServe.regUser(user,pass);
  return res.json(result);
})
router.get('/allUser', async(req,res) => {
  let result = await userServe.getAllUser();
  console.log(result,33333);
  return res.json(result);
})
router.get('/getDrinkDetail', async (req,res) => {
  let drinkId = req.query.id;
  let result = await userServe.getDrinkByNum(drinkId);
  return res.json(result);
})

module.exports = router;