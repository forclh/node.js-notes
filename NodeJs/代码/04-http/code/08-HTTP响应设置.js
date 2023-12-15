// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
  // 1.设置响应状态码
  response.statusCode = 203;
  // 2. 响应状态描述(几乎用不到)
  response.statusMessage = '77VV';
  // 3. 设置响应头
  // response.setHeader('Content-Type', 'text/html;charset=utf-8');
  // response.setHeader('Server', 'Node.js');
  // response.setHeader('MyHeader', 'AidenKao');  // 自定义响应头
  // response.setHeader('test', ['a', 'b', 'c'])  // 设置同名响应头

  // 4. 设置响应体
  response.write('Love');  // 用write设置了响应体之后，一般end中为空
  response.write('Love');  // 可以多次调用
  response.end();  // 必须有且仅有一个end方法需要执行
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});