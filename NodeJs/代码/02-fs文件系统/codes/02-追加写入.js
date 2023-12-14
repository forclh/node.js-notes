// 1. 引入fs模块
const fs = require('fs');
const path = require('path');

// 2.1 异步追加方法appendFile
fs.appendFile(path.resolve(__dirname, './座右铭.txt'), ', 择其善者而从之, 择期不善者而改之', err => {
  if (err) throw err;  // 如果有错误，抛出异常
  console.log('追加写入成功');  // 没有错误，打印成功的信息
});

// ------------------------------------------------------------------------
// 2.2 同步追加方法appendFileSyne
fs.appendFileSync(path.resolve(__dirname, './座右铭.txt'), '\r\n温故而知新, 可以为师矣');  // \r\n是window操作系统的换行

// ------------------------------------------------------------------------
// 2.3 writeFile实现追加写入
fs.writeFile(path.resolve(__dirname, './座右铭.txt'), 'love love love', { flag: 'a' }, err => {
  if (err) throw err;
  console.log('写入成功');
});