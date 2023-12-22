// 导入express
const express = require('express');
const path = require('path');

// 创建应用对象
const app = express();

// 创建路由
app.get('/other', (req, res) => {
  // 重定向响应
  res.redirect('https://www.baidu.com');
  // 下载响应
  res.download(path.resolve(__dirname, './01-初体验.js'));
  // JSON响应
  res.json({
    "name": 'AK',
    "age": 18
  });
  // 响应文件内容
  res.sendFile(path.resolve(__dirname, './02-form.html'));
});

// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});