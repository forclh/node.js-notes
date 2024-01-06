// 导入模块
const express = require('express');
const md5 = require('md5');  // 单向加密
// 导入jwt
const jwt = require('jsonwebtoken');
// 导入密钥
const { secret } = require('../../config/config.js');
const UserModel = require('../../models/UserModel.js');
const router = express.Router();
// 用户登录
router.post('/login', (req, res) => {
  // !表单校验
  // 查询数据库
  let { username, password } = req.body;
  UserModel.findOne({ username, password: md5(password) }, (err, data) => {
    if (err) {
      res.json({
        code: '2001',
        msg: '数据库读取失败！',
        data: null
      });
      return;
    }
    // 数据库没查询到
    if (!data) {
      res.json({
        code: '2002',
        msg: '用户名或密码错误！',
        data: null
      });
      return;
    }
    // 创建当前用户的token
    let token = jwt.sign({
      username: data.username,
      _id: data._id
    }, secret, {
      expiresIn: 3600 * 24 * 7
    });
    // 响应token
    res.json({
      code: '0000',
      msg: '登录成功',
      data: token
    })
    
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
