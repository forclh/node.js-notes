// 两种方式的暴露数据导入模块相同
// ! require()返回目标module.exports的值
const { tiemo, niejiao } = require('./me.js');

// 调用函数
tiemo();
niejiao();