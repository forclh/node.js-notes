// token 中间件
const jwt = require('jsonwebtoken');
const { secret } = require('../config/config.js');

module.exports = (req, res, next) => {
  // 获取token（一般是通过请求头传递）
  let token = req.get('token');
  // 判断token是否存在
  if (!token) {
    return res.json({
      code: '2003',
      msg: 'token missed',
      data: null
    })
  }
  // 校验token
  jwt.verify(token, secret, (err, data) => {
    // 校验token
    if (err) {
      return res.json({
        code: '2004',
        msg: 'token 校验失败',
        data: null
      })
    }
    // !保存用户信息(多人使用)
    // 通过中间件的方式给请求怎加数据，后续别的路由也能够访问
    req.user = data
    // 校验成功后执行后续操作
    next();
  });
};