//导入 fs
const fs = require('fs');
const path = require('path');

//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love');
console.log(__dirname + '/index.html');  // 采用下面的方式

// !resolve
console.log(path.resolve(__dirname, './index.html'));  // 第一个参数给绝对路径，后面的给相对路径
console.log(path.resolve(__dirname, 'index.html'));  // ./可以省略
console.log(path.resolve(__dirname, '/index.html', './test'));  // 不能用/开头，否则会被认为是绝对路径  S:\index.html\test

// sep 分隔符（保存当前操作系统的路径分隔符）
console.log(path.sep); // windows  \  Linux  /

// parse 方法 解析路径
console.log(__filename); // __filename文件的绝对路径
let str = 'S:\\Project\\front-end\\notes\\NodeJs\\代码\\03-path模块\\code\\path.js';
console.log(path.parse(str));

// basename  获取文件名
console.log(path.basename(str));

// dirname  获取文件夹路径
console.log(path.dirname(str));

// extname  获取文件扩展名
console.log(path.extname(str));

