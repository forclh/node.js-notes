/**
 * 按照要求搭建HTTP服务
 * 
 * GET /login 显示表单页面
 * POST /login 获取表单中的用户名和密码
 */

// 导入模块
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');  // 导入解析请求体的包
// 创建应用
const app = express();

// ! 解析JSON格式的请求体中间件函数
// const jsonParser = bodyParser.json();
// ! 解析queryString格式的请求体中间件函数
const urlencodedParser = bodyParser.urlencoded({ extended: false }); //username=admin&password=123456


// 创建路由规则
// GET
app.get('/login', (req, res) => {
  // 响应文件内容
  res.sendFile(path.resolve(__dirname, './11-form.html'));  // 通过表单创建post请求

});

// POST
app.post('/login', urlencodedParser, (req, res) => {
  // 获取post请求体数据
  console.log(req.body);  // !当中间件函数执行完毕之后，会往请求对象req身上添加属性body
  res.send('获取用户数据');
});

// 404
app.all('*', (req, res) => {
  res.send('<h1>404 Not Found</h1>');
});

// 监听端口
app.listen(3000, () => {
  console.log('服务以启动...');
})