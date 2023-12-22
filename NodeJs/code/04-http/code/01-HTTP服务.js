// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
// request形参用于接收请求报文
// response形参用于定义返回的响应报文
// 回调函数会在接收到请求报文的时候执行
const server = http.createServer((request, response) => {
  // response.end('Hello HTTP Server');  // 设置响应体，并结束响应
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.end('你好');  // 中文出现乱码
});

// 3. 监听端口，启动服务
// 监听9000端口，回调函数会在服务成功启动之后执行 
server.listen(9000, () => {
  console.log('服务已经启动...');
});