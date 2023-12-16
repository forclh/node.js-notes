// 测试nodemon包
// npm i -g nodemon 安装
// nodemon <文件路径> 运行
// 全局包通过暴露的命令使用，局部包通过require导入使用
// 通过npm root -g 查看全局安装包的位置

// 1. 导入http模块
const http = require('http');

// 2. 创建服务对象
const server = http.createServer((request, response) => {
  response.end('Hello HTTP Server!!!');
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动....');
});