// 检测登录的中间件
module.exports = (req, res, next) => {
  // 判断session（是否为登录状态）
  if (!req.session.username) {
    return res.redirect('/login');  // 跳转到登录页面
  }
  next();
};