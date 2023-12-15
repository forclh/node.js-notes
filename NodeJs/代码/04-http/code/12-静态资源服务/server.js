/**
 * 创建一个HTTP服务，端口为9000，满足如下需求
 * GET /index.html        响应 page/index.html的文件内容
 * GET /css/app.css     响应 page/css/app.css的文件内容
 * GET /images/logo.png   响应 page/images/logo.png的文件内容
 */

// 导入http模块
const http = require('http');
const fs = require('fs');
const path = require('path');
// 什么mime类型变量
const mines = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  mp4: 'video/mp4',
  mp3: 'audio/mpeg',
  json: 'application/json'
}

// 创建服务对象
const server = http.createServer((request, response) => {
  // !判断是否为GET请求
  if (request.method !== 'GET') {
    response.statusCode = 405;
    response.end('<h1>405 Method Not Allowed</h1>')
    return;
  }

  const { pathname } = new URL(request.url, 'http://127.0.0.1:9000');
  // 拼接文件路径
  // const filePath = path.resolve(__dirname, 'page', pathname);  // 这样会出问题，pathname以 / 开头会被认为是绝对路径
  const filePath = path.resolve(__dirname, `page${pathname}`);
  // console.log(filePath);
  // 异步读取文件
  fs.readFile(filePath, (err, data) => {
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    if (err) {
      // !错误处理
      // 判断错误代号
      switch (err.code) {
        case 'ENOENT':  // 资源不存在
          response.statusCode = 404;
          response.end('<h1>404 Not Found</h1>');
          break;
        case 'EPERM':  // 无访问权限
          response.statusCode = 403;
          response.end('<h1>403 Forbidden</h1>');
          break;
        default:
          response.statusCode = 500;
          response.end('<h1>500 Internal Server Error</h1>');
      }
      return;
    }

    // !根据文件类型设置MIME类型
    // 1. 获取文件的后缀名
    const ext = path.extname(filePath).slice(1);
    // 2. 获取后缀名对应的类型
    const type = mines[ext];
    if (type) {
      // 匹配成功
      // 只需要给html文件设置字符集，其他资源会根据网页的字符集自动调整
      // html文件中的meta标签已经设置了字符集，优先级低于响应头中的设置
      if (ext === 'html') {
        response.setHeader('Content-Type', `${type};charset=utf-8`);
      } else {
        response.setHeader('Content-Type', type);
      }
    } else {
      // 匹配失败
      response.setHeader('Content-Type', 'application/octet-stream');
    }
    // 响应文件内容
    response.end(data);
  })
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});
