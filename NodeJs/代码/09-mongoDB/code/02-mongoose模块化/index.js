// 导入 db 模块
const db = require('./db/db.js');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel.js');

// 调用函数
db(() => {
  // 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9
  }, (err, data) => {
    // 判断是否出错
    if (err) {
      console.log(err);
      return
    }
    // 如果没有出错，则输出插入后的文档对象
    console.log(data);
    // 4. 关闭数据库连接(项目运行的时候是不会添加改代码的，这里是为了方便学习使用)
    mongoose.disconnect();
  });
});





