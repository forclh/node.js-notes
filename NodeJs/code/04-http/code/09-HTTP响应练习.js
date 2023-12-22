/**
 * 练习：搭建HTTP服务，响应一个4行3列的表格，并且要求表格有隔行换色效果古，且点击表格单元格能够高亮显示
 */

// 导入http模块
const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
  response.end(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        td {
          padding: 20px 40px;
        }
        table, td {
          border-collapse: collapse;
        }
        table tr:nth-child(odd) { 
          background: #aef;
        }
        table tr:nth-child(even) {
          background: #fcb;
        }
      </style>
    </head>
    <body>
      <table border="1">
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
      </table>
    </body>
    <script>
  let tds = document.querySelectorAll('td')
  // 使用 JavaScript 为所有单元格添加点击事件监听器
  tds.forEach(td => {
    td.onclick = () => {
      // 移除之前高亮的单元格的高亮效果
      tds.forEach(td => {
        td.style.backgroundColor = '';
      });
      // 高亮点击的单元格
      td.style.backgroundColor = 'yellow';
    };
  });
</script>
  </html>
  `);  // 设置响应体
});

// 监听端口，启动服务
server.listen(9000, () => {
  console.log('服务已经启动...');
});