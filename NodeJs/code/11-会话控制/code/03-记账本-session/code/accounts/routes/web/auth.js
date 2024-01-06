// 导入模块
const express = require('express');
const router = express.Router();
const UserModel = require('../../models/UserModel.js');
const md5 = require('md5');  // 单项加密

// 注册页面
router.get('/reg', (req, res) => {
  // 响应 HTML 内容
  res.render('auth/reg');
});

// 用户注册
router.post('/reg', (req, res) => {
  // 进行表单验证
  // 获取请求体的数据

  UserModel.create({ ...req.body, password: md5(req.body.password) }, (err, data) => {
    if (err) {
      res.status(500).send('注册失败');
      return
    }
    res.render('prompt/success', { msg: '注册成功', url: '/login' });
  });
});

// 登录页面
router.get('/login', (req, res) => {
  // 响应 HTML 内容
  res.render('auth/login');
});

// 用户登录
router.post('/login', (req, res) => {
  // !表单校验
  // 查询数据库
  let { username, password } = req.body;
  UserModel.findOne({ username, password: md5(password) }, (err, data) => {
    if (err) {
      return res.status(500).send('登录失败');
    }
    // 数据库没查询到
    if (!data) {
      return res.send('账号或密码错误...');
    }
    // 写入session
    req.session.username = data.username;
    req.session._id = data._id;
    
    // 登录成功
    res.render('prompt/success', {msg: '登录成功', url: '/account'});
  })
});

// 退出登录
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render('prompt/success', {msg: '退出成功', url: '/login'});
  })
})



module.exports = router;
