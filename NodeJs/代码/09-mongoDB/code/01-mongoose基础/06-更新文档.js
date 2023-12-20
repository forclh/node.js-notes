//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  // 6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let BookModel = mongoose.model('novel', BookSchema);

  // ! 7.更新文档
  // 更新单条数据
  // 参数：筛选条件/更新的内容(只更新同名匹配的属性)/回调函数
  BookModel.updateOne({ name: '红楼梦' }, { price: 9.9 }, (err, data) => {
    // 判断err
    if (err) {
      console.log(err);
      console.log("更新失败");
      return;
    }
    console.log(data);
    /**
     * 输出结果为一个对象
     * {
          acknowledged: true,
          modifiedCount: 1,   // 修改的数量
          upsertedId: null,
          upsertedCount: 0,
          matchedCount: 1
        }
    */
  });

  // 批量更新数据
  // 参数：筛选条件/更新的内容(只更新同名匹配的属性)/回调函数
  BookModel.updateMany({ author: '甲鱼不是龟' }, { is_hot: true }, (err, data) => {
    // 判断err
    if (err) {
      console.log(err);
      console.log("更新失败");
      return;
    }
    console.log(data);
  });

});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
});

