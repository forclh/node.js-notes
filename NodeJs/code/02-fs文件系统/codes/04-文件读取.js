//1. 引入 fs 模块
const fs = require('fs');
const path = require('path');
// ------------------------------------------------------------------------
// 2. readFile 异步读取
fs.readFile(path.resolve(__dirname, './观书有感.txt'), (err, data) => {
  if (err) throw err;
  console.log(data.toString());  // 将buffer对象转换成字符串
});

// ------------------------------------------------------------------------
//3. readFileSync 同步读取
let data = fs.readFileSync(path.resolve(__dirname, './观书有感.txt'));
console.log(data.toString());
