// 需求：局域网内可以访问`尚品汇`的网页

// 导入模块
const express = require('express');
const path = require('path');
// 创建应用
const app = express();

// 静态资源中间件
app.use(express.static(path.resolve(__dirname, './尚品汇')));

// 监听端口
app.listen(3000, () => {
  console.log('服务已启动...');
})