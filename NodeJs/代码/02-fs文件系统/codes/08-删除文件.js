//1. 导入 fs 模块
const fs = require('fs');
const path = require('path');
// 2. 调用unlink方法 unlinkSync
fs.unlink(path.resolve(__dirname, './观书有感.txt'), err => {
  if (err) throw err;
  console.log('删除成功');
});
// 3. 调用 rm 方法 rmSync (14.4版本) 
fs.rm(path.resolve(__dirname, './座右铭.txt'), err => {
  if (err) throw err;
  console.log('删除成功');
});

