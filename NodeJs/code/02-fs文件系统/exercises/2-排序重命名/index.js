// 1. 导入fs模块
const fs = require('fs');
const path = require('path');  // 导入path模块用于处理文件路径

// 2. 读取当前目录下assets文件中所有的文件列表
let files = fs.readdirSync(path.resolve(__dirname, './assets'));

// 遍历数组
files.forEach((item, index) => {
  // 拆分以'-'为分隔符的文件名
  let name = item.split('-')[1];
  index++;
  index = index < 10 ? '0' + index : index;
  let newName = `${index}-${name}`;

  let oldPath = path.resolve(__dirname, './assets', item);
  let newPath = path.resolve(__dirname, './assets', newName);
  // 执行重命名
  try {
    fs.renameSync(oldPath, newPath);
  } catch (error) {
    console.error(`Error renaming file ${item}: ${error}`);
  }
});

