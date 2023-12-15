/**
 * 练习：搭建HTTP服务，响应一个4行3列的表格，并且要求表格有隔行换色效果古，且点击表格单元格能够高亮显示
 */

// 导入http模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建服务对象
const server = http.createServer((request, response) => {
  const htmlPath = path.resolve(__dirname, './10-HTTP响应练习.html');
  // 异步读取文件内容
  fs.readFile(htmlPath, (err, data) => {
    if (err) {
      // 发生错误时发送 500 状态码以及错误信息
      response.statusCode = 500;
      response.end('Server Error')
    } else {
      // 成功读取文件后发送文件内容
      response.end(data);  // end参数可以是字符串或者buffer
    }
  });
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});