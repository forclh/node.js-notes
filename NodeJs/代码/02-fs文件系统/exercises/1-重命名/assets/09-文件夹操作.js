//1. 导入 fs 模块
const fs = require('fs');

//2. 创建文件夹 mkdir
fs.mkdir('./html', err => {
  if (err) throw err;
  console.log('创建成功');
});

// ------------------------------------------------------------------------
//2-2 递归创建
fs.mkdir('./a/b/c', { recursive: true }, err => {
  if (err) throw err;
  console.log('创建成功');
});

// ------------------------------------------------------------------------
//2-3 读取文件夹 readdir
fs.readdir('./', (err, data) => {
  if (err) throw err;
  console.log(data);  // 返回资料名称数组
});

// ------------------------------------------------------------------------
//2-4 删除文件夹  rm  remove 移除
fs.rmdir('./html', err => {
  if (err) throw err;
  console.log('删除成功');
});

// ------------------------------------------------------------------------
//递归删除(以后会被删除不推荐使用)
fs.rmdir('./a', { recursive: true }, err => {
  if (err) throw err;
  console.log('删除成功');
});

// ------------------------------------------------------------------------
// !建议使用
fs.rm('./a', { recursive: true }, err => {
  if (err) throw err;
  console.log('删除成功');
});