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