var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 导入express-session
const session = require('express-session');  // 中间件
const MongoStore = require('connect-mongo');
// 导入配置项
const {DBHOST, DBPORT, DBNAME} = require('./config/config.js');

const indexRouter = require('./routes/web/index');
const accountRouter = require('./routes/api/account.js')
const authRouter = require('./routes/web/auth.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 中间件
app.use(logger('dev'));
app.use(express.json());  // 请求体
app.use(express.urlencoded({ extended: false }));  // 请求体
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name: 'sid', //设置cookie的name，默认值是：connect.sid
  secret: 'atguigu', //参与加密的字符串（又称签名）  加盐
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true, //是否在每次请求时重新保存session， 更新session的过期时间
  store: MongoStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}` //数据库的连接配置， 存储到project数据库下
  }),
  // 设置响应请求中cookie的特性（session通过cookie向客户端响应）
  cookie: {
    httpOnly: true, // 开启后前端无法通过 JS 操作（document.cookie）访问cookie
    maxAge: 1000 * 3600 * 7 * 24 // 这一条 是控制 sessionID 的过期时间的！！！
  },
}))


app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accountRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 响应404
  res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('prompt/error');
});

module.exports = app;
