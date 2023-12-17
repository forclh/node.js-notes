// 导入express
const express = require('express');
const path = require('path');
// 创建应用对象
const app = express();

// ! 静态资源中间件的设置
// 可以匹配根目录，返回index.html
// 如果路由也设置了相同的匹配，则返回先匹配上的（代码从上到下执行，即谁在上匹配谁）
app.use(express.static(path.resolve(__dirname, './public')));  // 参数为静态资源文件夹的路径

// 创建路由
app.get('/home', (req, res) => {
  res.end('hello express');
});

// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});