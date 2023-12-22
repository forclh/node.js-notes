/**
 * 将列表数据渲染到ul li标签中
 */
// 列表数据
const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙悟净'];

// ---------------
// 原生js实现
let str = '<ul>';
xiyou.forEach(item => {
  str += `<li>${item}</li>`
})
str += '</ul>';

console.log(str);

// ---------------
// ejs渲染
// 注意点：
const ejs = require('ejs');
const fs = require('fs');
const htmlString = fs.readFileSync('./02-ejs列表渲染.html').toString();
let result = ejs.render(htmlString, { xiyou });


console.log(result);

