// 导入mongoose
const mongoose = require('mongoose');
// 6.0版本设置
mongoose.set('strictQuery', false);

// 链接mongodb服务 
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

// 设置回调
// open 表示设置在连接成功后的回调  (once 表示事件回调函数只执行一次)
mongoose.connection.once('open', () => {
  // 后续操作都应该在open的回调函数之中（最新的则使用promise）
  // 创建文档的结构对象（设置集合中文档的属性以及属性值的类型）
  const BookSchema = new mongoose.Schema({
    // ! 字段验证
    name: {
      type: String,
      required: true,  // 表面该属性必须不为空
      unique: true,   // 独一无二的值
    },
    author: {
      type: String,
      default: '匿名',  // 设置默认值
    },
    style: {
      type: String,
      enum: ['言情', '科学', '恐怖', '都市', '志怪'],  // 值必须在枚举选项中
    },
    price: Number
  });
  // 创建模型对象(对文档操作的封装对象)
  const BookModel = mongoose.model('books', BookSchema);
  console.log('链接成功');

  // 新增
  BookModel.create({
    name: '西游记',
    author: '吴承恩',
    price: 19.9,
    style: '志怪',
  }, (err, data) => {
    // 判断是否出错
    if (err) {
      console.log(err);
      console.log('插入失败');
      return
    }
    // 如果没有出错，则输出插入后的文档对象
    console.log(data);
    // 关闭数据库连接(项目运行的时候是不会添加改代码的，这里是为了方便学习使用)
    mongoose.disconnect();
  });
});
// error 表示设置在连接错误后的回调
mongoose.connection.on('error', () => {
  console.log('链接失败');
});
// close 表示设置在连接关闭后的回调
mongoose.connection.on('close', () => {
  console.log('链接关闭');
});
