// 1. 导入fs模块
const fs = require('fs');
const path = require('path');  // 导入path模块用于处理文件路径

// 2. 读取code文件中所有的文件列表
let files = fs.readdirSync(path.resolve(__dirname, 'assets'));

// 遍历数组
files.forEach(item => {
  // 拆分以'-'为分隔符的文件名
  let indexStr = item.split('-')[0];

  // index[0] !== '0' 检查字符串索引是否不以'0'开头
  // !isNaN(index) 确保indexStr转换后是数字
  // parseInt(index, 10) < 10 确保转换为数字的index小于10
  if (indexStr[0] !== '0' && !isNaN(indexStr) && parseInt(indexStr, 10) < 10) {
    // 重命名：在原文件名前加上'0'
    let newName = `0${item}`;
    let oldPath = path.resolve(__dirname, 'assets', item);
    let newPath = path.resolve(__dirname, 'assets', newName);

    // 执行重命名
    try {
      fs.renameSync(oldPath, newPath);
    } catch (error) {
      console.error(`Error renaming file ${item}: ${error}`);
    }
  }
});

