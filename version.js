// 变量标注所需参数
const VERSION = "1.0.0";
const UPDATE_URL = "https://example.com/update.zip";

// 处理客户端请求
function handleRequest(reqType) {
  if (reqType === "version") {
    return VERSION;
  } else if (reqType === "update_address") {
    return UPDATE_URL;
  } else {
    return "Invalid request type";
  }
}

// 导出处理函数
module.exports = handleRequest;
