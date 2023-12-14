//1. 导入 fs 模块
const fs = require('fs');

//2. stat方法  status缩写
fs.stat('../assets/笑看风云.mp4', (err, data) => {
  if (err) {
    console.log('操作失败');
    throw err;
  }
  console.log(data);
  console.log(data.isFile());  // 判断是否为文件
  console.log(data.isDirectory()); // 判断是否为文件夹
});