// 导入db
const db = require('./db/db.js');

// 导入模型
const MovieModel = require('./models/MovieModel.js');

db(() => {
  // 操作电影的模型对象
  MovieModel.create({ title: '让子弹飞', director: '姜文'}, (err, data) => {
    if (err) {
      console.log(err, '新增失败');
      return;
    }
    console.log(data);
  })

});