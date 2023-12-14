/**
 * 需求:
 *   复制assets文件夹下的『笑看风云.mp4』
 */
const fs = require('fs');
const path = require('path');
const process = require('process');
//方式一 readFile
//读取文件内容
let data = fs.readFileSync(path.resolve(__dirname, '../assets/笑看风云.mp4'));
//写入文件
fs.writeFileSync(path.resolve(__dirname, '../assets/笑看风云2.mp4'), data);
console.log(process.memoryUsage());  // 查看rss内存占用大小

// ------------------------------------------------------------------------
//方式二 流式操作
// 写法一
//创建读取流对象
const rs = fs.createReadStream(path.resolve(__dirname, '../assets/笑看风云.mp4'));
//创建写入流对象
const ws = fs.createWriteStream(path.resolve(__dirname, '../assets/笑看风云3.mp4'));
//绑定 data 事件
rs.on('data', chunk => {
  ws.write(chunk);
});

rs.on('end', () => {
  console.log('复制完成')
  console.log(process.memoryUsage());  // 异步执行方式，需要在end时间中调用
});
// 写法二
rs.pipe(ws);


