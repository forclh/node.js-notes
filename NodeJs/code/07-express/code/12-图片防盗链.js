/**
 * 只允许域名为127.0.0.1的网页访问，localhost不允许访问
 */

// 导入express
const express = require('express');
const path = require('path');
// 创建应用对象
const app = express();

// !创建全局防盗链中间件
app.use((req, res, next) => {
  // !获取请求头中的referer(用于表示当前请求的发起页面的地址)  
  const referer = req.get('referer');
  // console.log(referer);  // 第一个获取html请求没有refer值(因为是直接通过地址栏来访问的，不是由其他页面发起的)，输出undefined
  if (referer) {
    const url = new URL(referer);  // 利用URL对象解析
    // console.log(url);
    const { hostname } = url  // 主机名
    // console.log(hostname);
    // 判断hostname是否为127.0.0.1
    if (hostname !== '127.0.0.1') {
      res.status(404).send('<h1>404 Not Found</h1>');
      return;
    }
  }
  next();  // ! 注意不要忘记加next()执行后续的中间件和路由
})

// ! 全局静态资源中间件的设置
app.use(express.static(path.resolve(__dirname, './10-静态资源中间件/public')));  // 静态资源目录就是请求的根目录


// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});