// 1. 导入http对象
const http = require('http');


// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 获取请求方法
  let { method } = request;
  // 获取请求路径
  const url = new URL(request.url, 'http://127.0.0.1:9000');
  const { pathname } = url;
  // 设置响应头
  response.setHeader('content-type', 'text/html;charset=utf-8');

  if (method === 'GET') {
    // 登录情况
    if (pathname === '/login') {
      response.end('登录页面');
      // 注册情况
    } else if (pathname === '/reg') {
      response.end('注册页面');
    } else {
      response.end('Not Found');
    }
  }
});

// 3. 监听端口
server.listen(9000, () => {
  console.log('服务已经启动...');
});