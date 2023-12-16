// 导入文件夹
const m = require('./module');


// !1. 导入文件夹时首先导入文件夹中package.json文件main属性所对应的文件， main属性对应的文件不存在则报错
// !2. 如果没有package.json文件或者不存在main属性，则会尝试导入文件夹下的index.js和index.json
// 其他情况报错
console.log(m);