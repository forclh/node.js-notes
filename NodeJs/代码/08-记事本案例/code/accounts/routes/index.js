// 导入模块
const express = require('express');
const router = express.Router();
const path = require('path');
// -----------lowdb--------------
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// 数据会存入db.json文件中
const adapter = new FileSync(path.resolve(__dirname, '../data/db.json'));
// 获取db对象
const db = low(adapter);
// -------------shortid---------
const shortid = require('shortid');

// 记账本列表
router.get('/account', function (req, res, next) {
  // 获取所有的账单信息
  let accounts = db.get('accounts').value();
  res.render('list', { accounts })
});

// 添加记录
router.get('/account/create', function (req, res) {
  res.render('create');
});

// 新增记录
router.post('/account', function (req, res) {
  // 获取请求体的数据
  // console.log(req.body);  // 在app.js中中间件给我们添加了body属性
  let id = shortid.generate();
  // 对数据进行简单的持久化保存（lowdb包）
  db.get('accounts').unshift({ id: id, ...req.body }).write();  // 给数据增加id标识
  // 完善添加记录提醒
  res.render('success', { msg: '添加成功', url: '/account' });
});

// !删除记录
// 要根据id删除元数据 -> 同过请求获取id -> 删除按钮发起get请求并携带id参数
router.get('/account/:id', (req, res) => {
  // 获取
  const { id } = req.params;
  // 删除对应的对象
  db.get('accounts').remove({ id }).write();
  // 提醒
  res.render('success', { msg: '删除成功', url: '/account' });
});


module.exports = router;
