//1. 导入 fs 模块
const fs = require('fs');

//2. 异步重命名方法 rename
fs.rename('./座右铭.txt', './论语.txt', err => {
  if (err) throw err;
  console.log('重命名成功');
});

// 文件的移动
fs.rename('./data.txt', '../assets/data.txt', err => {
  if (err) throw err;
  console.log('文件移动成功');
});

// ------------------------------------------------------------------------
// 同步文件重命名和移动方法 renameSync
fs.renameSync('./论语.txt', '../assets/座右铭.txt');