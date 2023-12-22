const mongoose = require('mongoose');

// 1. 创建文档的结构对象（设置集合中文档的属性以及属性值的类型）
const AccountSchema = new mongoose.Schema({
  // 标题
  title: {
    type: String,
    required: true
  },
  // 时间
  time: {
    type: Date,
  },
  // 类型 0:支出 , 1:收入
  type: {
    type: Number,
    default: 0
  },
  // 金额
  account: {
    type: Number,
    required: true
  },
  // 备注
  remarks: {
    type: String,
  }
});
// 2. 创建模型对象(对文档操作的封装对象)
const AccountModel = mongoose.model('accounts', AccountSchema);

// 3. 暴露模型对象
module.exports = AccountModel;