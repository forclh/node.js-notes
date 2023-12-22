// 1. 安装ejs
// npm i ejs
// 2. 导入ejs
const ejs = require('ejs');
const fs = require('fs');

// 这种方式渲染字符串，耦合性太强
let china = '中国';
// let str = `我爱你${china}`;
// ---------------------------

let weather = '今天天气不错~';
// 使用ejs渲染
let str = fs.readFileSync('./01-ejs初体验.html').toString();  // buffer转字符串
let result = ejs.render(str, { china: china, weather });  // 对象可以简写
console.log(result);