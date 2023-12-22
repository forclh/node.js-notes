// 导入下载的uniq包
// ! 导入当前目录下node_modules中的uniq文件夹(文件中package.json文件main属性所指的文件)
// ! 当前目录没有node_modules文件则往上一层找，知道磁盘的根目录
const uniq = require('uniq');
// const uniq = require('./node_modules/uniq');
// const uniq = require('./node_modules/uniq/uniq.js');


// 2. 使用函数
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const result = uniq(arr);
console.log(result);