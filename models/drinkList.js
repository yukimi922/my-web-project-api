const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
    type: String,
    require: true,
    trim: true
  },
  number: { // 编号
    type: Number,
    trim: true,
    require: true
  },
  price: {
    type: Number,
    trim: true,
    require: true
  },
  desc: String, // 描述
  src: Array,  // 图片展示
  flavor: Array,  // 口味
  batching: Array  // 配料
})

module.exports = mongoose.model("drinkList",userSchema,"drink_list");