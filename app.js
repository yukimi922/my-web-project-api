const express = require("express");
const app = express();
const db = require('./utils/db');
const userRouter = require('./router/user');
const bodyParser = require("body-parser");

// log4js
global.logger = require('./utils/log').logger;
httpLogger = require('./utils/log').httpLogger;
//这样会自动记录每次请求信息，放在其他use上面
app.use(httpLogger);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//-----------------------------------CORS设置-----------------------------------------
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', "true");
  next();
});
app.use((req, res, next) => {
  if (req.method && req.method.toLowerCase() === 'options') {
    return res.send(true);
  }
  next();
});


//--------------------------------挂载路由-----------------------------------
app.use('/user', userRouter);



app.listen(3002, () => {
  console.log("3002 is ready.......");
})