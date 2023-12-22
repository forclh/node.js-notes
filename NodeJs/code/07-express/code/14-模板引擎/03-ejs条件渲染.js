/**
 * 通过 isLogin 决定最终输出的内容
 * true 输出 <span>欢迎回来</span>
 * false 输出 <button>登录</button>  <button>注册</button>
 */

// 导入模块
const ejs = require('ejs');
const fs = require('fs');
let isLogin = true;
// 读取html文件内容
const htmlString = fs.readFileSync('./03-ejs条件渲染.html').toString();
// ejs渲染
const result = ejs.render(htmlString, { isLogin });
console.log(result);