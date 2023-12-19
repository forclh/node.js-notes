// 导入express
const express = require('express');
const path = require('path');

// 创建应用对象
const app = express();

// 1. 设置模板引擎
app.set('view engine', 'ejs');  // 模板引擎还有pug,twing等
// 2. 设置模板文件的存放位置(模板文件是指具有模板语法内容的文件)
app.set('views', path.resolve(__dirname, './views'));

// 创建路由
app.get('/home', (req, res) => {
  // 3. 在模板文件夹中创建模板文件 home.ejs
  // 4. 渲染模板 res.render('模板的文件名', 数据)
  // 声明变量
  let title = '一定要加油鸭！';
  res.render('home', {title});  // 相当于使用ejs.render()
});

// 监听端口,启动服务
app.listen(3000, () => {
  console.log('服务已经启动...');
});