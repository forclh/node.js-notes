//1. 导入 fs 模块
const fs = require('fs');

//相对路径
fs.writeFileSync('./index.html', 'love');  // 当前文件夹下
fs.writeFileSync('index.html', 'love');  // 当前文件夹下
fs.writeFileSync('../index.html', 'love');  // 上一级文件夹下

//绝对路径
fs.writeFileSync('D:/index.html', 'love');  // 指定盘符
fs.writeFileSync('/index.html', 'love');  // 指定当前盘符的根目录

