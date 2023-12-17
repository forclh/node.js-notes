// 导入express
const express = require('express');
// 导入json文件
const { singers } = require('./singers.json');
// 创建应用对象
const app = express();

// 创建路由
app.get('/singer/:id.html', (req, res) => {
  // 获取路由参数
  const { id } = req.params;
  // 在数组中寻找对应id的数据
  const result = singers.find(item => item.id === Number(id));
  // 判断数据是否存在
  if (!result) {
    res.status = 404;
    res.end('<h1>404 Not Found</h1>');
    return;
  }

  const { singer_name, singer_pic } = result;
  res.end(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h2>${singer_name}</h2>
      <img src="${singer_pic}">
    </body>
    </html>
  `)
});

// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});