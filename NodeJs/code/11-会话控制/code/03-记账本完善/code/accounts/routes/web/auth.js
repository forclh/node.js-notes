// 导入模块
const express = require('express');
const router = express.Router();

// 注册页面
router.get('/reg', (req, res) => {
  // 响应 HTML 内容
  res.render('auth/reg');
});

// 用户注册
router.post('/reg', (req, res) => {
  // 获取请求体的数据
  console.log(res.body);

  res.send('测试');
});



module.exports = router;
