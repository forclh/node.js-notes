// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
  // 实例化 URL 对象
  // let url = new URL('http://www.xxx.com/search?a=100&b=200');  // 写法一
  // let url = new URL('/search?a=100&b=200', 'http://www.xxx.com');  // 写法二
  let url = new URL(request.url, 'http://127.0.0.1:9000');
  console.log(url);
  // 获取url路径
  console.log(url.pathname);
  // !获取查询字符串
  console.log(url.searchParams.get('keyword'));
  response.end('url new');
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});