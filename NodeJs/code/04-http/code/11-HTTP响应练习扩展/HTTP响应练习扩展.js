/**
 * 练习：搭建HTTP服务，响应一个4行3列的表格，并且要求表格有隔行换色效果古，且点击表格单元格能够高亮显示
 */

// 导入http模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建服务对象
const server = http.createServer((request, response) => {
  const htmlPath = path.resolve(__dirname, './index.html');
  const cssPath = path.resolve(__dirname, './index.css');
  const jsPath = path.resolve(__dirname, './index.js');
  const { pathname } = new URL(request.url, 'http://127.0.0.1:9000');
  // !根据请求路由来返回对应的响应
  if (pathname === '/') {
    const html = fs.readFileSync(htmlPath);
    response.end(html);
  } else if (pathname === '/index.css') {
    const css = fs.readFileSync(cssPath);
    response.end(css);
  } else if (pathname === '/index.js') {
    const js = fs.readFileSync(jsPath);
    response.end(js);
  } else {
    response.statusCode = 404;
    response.end('404 Not Found');
  }
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});