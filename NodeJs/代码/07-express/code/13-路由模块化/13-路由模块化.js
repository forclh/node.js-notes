// 路由模块化
const express = require('express');

// 导入路由模块
const homeRouter = require('./routes/homeRouter.js');
const adminRouter = require('./routes/adminRouter.js');

// 创建应用对象
const app = express();

// 使用路由模块
app.use(homeRouter);
app.use(adminRouter);

// 404
app.all('*', (req, res) => {
  res.status(404);
  res.send('<h1>404 Not Found</h1>');
});

app.listen(3000, () => {
  console.log('服务已经启动...');
})