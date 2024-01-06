// 导入express
const express = require('express');
const cookieParser = require('cookie-parser');  // 解析cookie的包

// 创建应用对象
const app = express();
// 设置中间件(能够获取每一个请求的cookies)
app.use(cookieParser());

// 设置cookie的路由
app.get('/set-cookie', (req, res) => {
  // 通过响应报文的响应头设置cookie，设置完成后再次请求则会携带cookie，会在浏览器关闭时候销毁
  // res.cookie('name', 'AK');
  // 通过设置cookie的生命周期来实现类似7天免登录的效果
  res.cookie('name', '77', {maxAge: 60 * 1000});  // maxAge的单位是毫秒，浏览器报文中显示的单位是秒
  res.cookie('theme', 'blue');  // 可以设置多个cookie
  res.send('home');
});


// 删除cookie的路由
app.get('/delete-cookie', (req, res) => {
  res.clearCookie('theme');  // 通过设置响应头中的对应名字的cookie的过期时间
  res.send('cookie 删除成功');
});

// 获取cookie的路由
app.get('/get-cookie', (req, res) => {
  console.log(req.cookies);  // 对象
  res.send(`欢迎您 ${req.cookies.name}`);
});

// 监听端口，启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});