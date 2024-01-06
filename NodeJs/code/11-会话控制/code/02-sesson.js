const express = require('express');
const session = require('express-session');  // 中间件
const MongoStore = require('connect-mongo');

// 创建服务
const app = express();

// 设置中间件
app.use(session({
  name: 'sid', //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）  加盐
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true, //是否在每次请求时重新保存session， 更新session的过期时间
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置， 存储到project数据库下
  }),
  // 设置响应请求中cookie的特性（session通过cookie向客户端响应）
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作（document.cookie）访问cookie
    maxAge: 1000 * 60 * 5 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}))

// session的设置
app.get('/login', (req, res) => {
  // 需求 username=admin&password=admin
  if (req.query.username === 'admin' && req.query.password === 'admin') {
    // 设置session
    req.session.username = 'admin';  // 可以设置多条session内容
    req.session.uid = '2359agdcgggc'
    // 成功响应
    res.send('登录成功');
  } else {
    res.send('登录失败');
  }
});
// session的读取
app.get('/cart', (req, res) => {
  // 检测sesson判断是否的登录
  if (req.session.username) {
    res.send(`购物车页面：欢迎您${req.session.username}`);
  } else {
    res.send('你还没有登录呢');
  }
});
// session的销毁
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send('退出成功');
  });
});

app.listen(3000, () => {
  console.log('服务已启动');
})