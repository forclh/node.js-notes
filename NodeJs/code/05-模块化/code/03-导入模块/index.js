// 注意事项
// 1. 导入模块需要使用相对路径，require不会受到工作目录影响（区别于fs模块）
// 2. 导入js和json模块时候可以省略后缀（同名js优先），但是建议不要省略后缀
// 3. 导入其他类型的文件，会被当做js处理如 test.abc
const tiemo = require('./me.js');
const duanzi = require('./duanzi.json');  // json模块默认暴露

// 调用函数
tiemo();