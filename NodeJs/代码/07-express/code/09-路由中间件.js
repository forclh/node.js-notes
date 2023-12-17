/**
 * 针对 /admin /setting 的请求，要求url携带code=521参数，如未携带则提示 【暗号错误】
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 前台
app.get('/home', (req, res) => {
  res.send('前台首页');
});

// !声明中间件函数
const checkCodeMiddleware = (req, res, next) => {
  // 判断URL中是否code参数等于521
  if (req.query.code === '521') {
    next();
  } else {
    res.send('暗号错误');
  }
};

// 后台
app.get('/admin', checkCodeMiddleware, (req, res) => {
  res.send('后台首页');
});
// 后台设置
app.get('/setting', checkCodeMiddleware, (req, res) => {
  res.send('设置页');
});

// 404
app.all('*', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
  console.log('服务已经启动...');
})