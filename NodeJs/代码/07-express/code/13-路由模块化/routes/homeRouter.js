// 前台路由模块

// 1.导入express
const express = require('express');

// 2.创建router对象(相当于小型的app对象)
const router = express.Router();

// 3.创建路由规则
// 前台
router.get('/home', (req, res) => {
  res.send('前台首页');
});

// 搜索
router.get('/search', (req, res) => {
  res.send('内容搜索');
});

// 4.暴露router
module.exports = router;