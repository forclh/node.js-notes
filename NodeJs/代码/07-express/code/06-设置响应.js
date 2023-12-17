// 导入express
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由
app.get('/response', (req, res) => {
  // 原生响应
  res.statusCode = 404;
  res.statusMessage = 'LOVE';
  res.setHeader('xxx', 'yyy');
  res.write('hello express ');
  res.end('response');

  // express响应设置
  res.status(500); // 状态码
  res.set('aaa', 'bbb'); // 响应头
  res.send('你好 express'); // 响应体（send方法自动设置utf-8字符集）
  res.status(400).set('ccc', 'ddd').send('链式调用');
});

// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});