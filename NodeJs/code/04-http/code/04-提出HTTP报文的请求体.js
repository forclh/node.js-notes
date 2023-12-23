// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  // 1. 声明一个变量
  let body = '';
  // 2. 绑定data事件 (request就是一个读取流对象)
  request.on('data', chunk => {
    body += chunk;  // chunk使buffer对象，运算时自动转换成字符串（内部自动调用toString方法，utf-8编码）
  });
  // 3. 绑定end事件，读取完触发
  request.on('end', () => {
    console.log(body);
    // 响应
    response.end('Hello HTTP');
  })

});

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});