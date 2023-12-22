/**
 * 需求:
 * 新建一个文件, 座右铭.txt,  写入内容, 三人行, 则必有我师焉
 */

// 1.导入fs模块
const fs = require('fs');
const path = require('path');
// ------------------------------------------------------------------------
// !2.1writeFile()异步写入文件
// 文件不存在则自动创建并写入
fs.writeFile(path.resolve(__dirname, './座右铭.txt'), '三人行, 则必有我师焉', err => {
  // 如果写入失败则err为错误对象，否则为null
  if (err) {
    console.log("写入失败");
    return
  }
  console.log('写入成功');  // 后输出
});

console.log(1 + 1);  // 先输出

// ------------------------------------------------------------------------
// 2.2writeFileSync同步写入
fs.writeFileSync(path.resolve(__dirname, './data.txt'), 'test');