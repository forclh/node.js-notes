/**
 * 记录每一个请求的url的ip地址
 */

const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

// !声明全局中间件函数（访问每个请求）
// req:请求，res:响应
// next:内部函数执行之后会指向后续的路由回调，或者是其他中间件函数回调
function recoredMiddleware(req, res, next) {
  // 获取url和ip
  const { url, ip } = req;
  // 将信息保存在文件中 access.log
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip} \r\n`);
  // !调用next
  next();
}

// 使用中间件函数
app.use(recoredMiddleware);

app.get('/home', (req, res) => {

  res.send('前台首页');
});

app.get('/admin', (req, res) => {
  res.send('后台首页');
});

app.all('*', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
  console.log('服务已经启动...');
})