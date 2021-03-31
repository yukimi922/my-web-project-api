const log = require("./log");
const resData = Object.create(null);

resData.formServiceData = (serviceInfo, msg = "success") => {
  let paramType = typeof serviceInfo;
  let returnData = null;
  switch (paramType) {
    case "string":
      returnData = resData.resError(serviceInfo, {})
      break;
    case "object": 
      returnData = resData.resSuccess(serviceInfo, msg)
      break
    default:
      // log.error(`fromServiceData--->${paramType}`);
      returnData = resData.resError('..ERROR.. ', undefined);
      break;
  }
  console.log(returnData,9999)
  return returnData;
}

resData.resSuccess = (result, msg = "success") => {
  return resData.resData(200,msg, result);
}

resData.resError = (msg, result) => {
  return resData.resData(undefined, msg, result);
}

resData.paramError = (info) => {
  return resData.resData(500, info || "参数错误");
}

resData.resData = (status = 500, msg = "error", result = {}) => {
  // if (status >= 500) {
  //   log.error(`resData--->${msg}`);
  // }
  return {
    status: status,
    msg: msg,
    result: result
  }
}

module.exports =  {
  resData
}