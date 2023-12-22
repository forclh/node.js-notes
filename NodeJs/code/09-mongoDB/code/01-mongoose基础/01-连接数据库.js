// 1. 安装mongoose npm i mongoose@6.9.2
// 2. 导入mongoose
const mongoose = require('mongoose');

// 3. 链接mongodb服务 
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');  // url:协议+ip地址+端口号+数据库名称（不存在则会自动创建）
// 6.0版本设置
mongoose.set('strictQuery', false);

// 4. 设置回调
// open 表示设置在连接成功后的回调  (once 表示事件回调函数只执行一次)
mongoose.connection.once('open', () => {
  console.log('链接成功');
});
// error 表示设置在连接错误后的回调
mongoose.connection.on('error', () => {
  console.log('链接失败');
});
// close 表示设置在连接关闭后的回调
mongoose.connection.on('close', () => {
  console.log('链接关闭');
});

// 设置mongodb的关闭时间(测试连接关闭)
// setTimeout(() => {
//   mongoose.disconnect();
// }, 2000);