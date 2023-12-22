const mongoose = require('mongoose');

// 1. 创建文档的结构对象（设置集合中文档的属性以及属性值的类型）
const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number
});
// 2. 创建模型对象(对文档操作的封装对象)
const BookModel = mongoose.model('books', BookSchema);

// 3. 暴露模型对象
module.exports = BookModel;