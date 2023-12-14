//1. 引入 fs 模块
const fs = require('fs');

//2. 创建读取流对象
const rs = fs.createReadStream('./笑看风云.mp4');
//3. 绑定 data 事件, 每读取一块就执行一次回调函数
rs.on('data', chunk => {
  console.log(chunk.length);  // 每次读取buffer的长度 64kb 65536字节
  // console.log(chunk);
});
//4. 读取完毕后触发end事件（可选）
rs.on('end', () => {
  console.log('读取完成');
});