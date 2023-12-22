// 导入mongoose
const mongoose = require('mongoose');

// 创建结构对象
const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
});

// 创建模型对象
const MovieModel = mongoose.model('movies', MovieSchema);

// 暴露对象
module.exports = MovieModel;