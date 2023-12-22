/**
 * 
 * @param {*} success 数据库连接成功的回调函数
 * @param {*} err 数据库连接失败的回调函数，设置了默认值
 */
module.exports = function (success, error=() => {console.log('连接失败...');}) {
  // if (typeof error !== 'function') {
  //   error = () => {
  //     console.log('连接失败...');
  //   };
  // }

  // 导入mongoose
  const mongoose = require('mongoose');
  // 导入配置文件
  const {DBHOST, DBPORT, DBNAME} = require('../config/config.js');

  // 6.0版本设置
  mongoose.set('strictQuery', false);

  // 链接mongodb服务 
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  // 设置回调
  // open 表示设置在连接成功后的回调  (once 表示事件回调函数只执行一次)
  mongoose.connection.once('open', () => {
    success();  // 连接成功
  });
  // error 表示设置在连接错误后的回调
  mongoose.connection.on('error', () => {
    error();  // 连接失败
  });
  // close 表示设置在连接关闭后的回调
  mongoose.connection.on('close', () => {
    console.log('链接关闭');
  });
}