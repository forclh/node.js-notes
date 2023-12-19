// 后台路由模块

// 导入express
const express = require('express');

// 创建router对象
const router = express.Router();

// 配置路由
// 后台
router.get('/admin', (req, res) => {
  res.send('后台首页');
});
// 后台设置
router.get('/setting', (req, res) => {
  res.send('设置页');
});

// 暴露模块
module.exports = router;