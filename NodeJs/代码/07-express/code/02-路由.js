// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello express');
});

// 匹配get方法
app.get('/', (req, res) => {
  res.end('Home');
});

// 匹配post方法
app.post('/login', (req, res) => {
  res.end('login login');
});

// 匹配所有的方法
app.all('/test', (req, res) => {
  res.end('test test');
});

// 404 响应
app.all('*', (req, res) => {
  res.end('404 Not Found');
});

// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});