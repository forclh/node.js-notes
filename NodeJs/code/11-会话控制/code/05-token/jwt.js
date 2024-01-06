// 导入jwt
const jwt = require('jsonwebtoken');

// 生成token
// jwt.sign(用户数据，加密字符串，配置项)
// let token = jwt.sign({
//   usename: 'AK'
// }, 'forclh', {
//   expiresIn: 60,  // token的生命周期，单位为s
// });

// console.log(token);



// 校验token
let t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VuYW1lIjoiQUsiLCJpYXQiOjE3MDQ1MzA1ODYsImV4cCI6MTcwNDUzMDY0Nn0.oz2V_uJTy-m5n9h_wKEaSRYUHHjBAOXbAP9X_I1r9Z8'

jwt.verify(t, 'forclh', (err, data) => {
  if (err) {
    return console.log('校验失败');
  }
  console.log(data);  // 
})