// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
// request形参用于接收请求报文
// response形参用于定义返回的响应报文
// 回调函数会在接收到请求报文的时候执行
const server = http.createServer((request, response) => {
  // 处理请求报文(浏览器存在默认获取图标的请求)
  // ----请求行-------------------------------------------------------
  // 1. 获取请求方法
  console.log(request.method);
  // 2. 获取请求url(只包含url中的路径与查询字符串)
  console.log(request.url);
  // 3. 获取HTTP协议的版本号
  console.log(request.httpVersion);

  // ----请求头-------------------------------------------------------
  // 4. 获取HTTP请求头,返回对象
  console.log(request.headers);
  console.log(request.headers.host);
  console.log(request.headers['accept-language']);

  // 设置响应体，并结束响应
  response.end('Hello HTTP Server');
});

// 3. 监听端口，启动服务
// 监听9000端口，回调函数会在服务成功启动之后执行 
server.listen(9000, () => {
  console.log('服务已经启动...');
});