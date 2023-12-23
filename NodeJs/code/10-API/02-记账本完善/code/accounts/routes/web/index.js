// 导入模块
const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');

const AccountModel = require('../../models/AccountModel.js');


// 记账本列表
router.get('/account', function (req, res, next) {
  // 获取所有的账单信息
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      res.status(500).send('读取失败');
      return;
    }
    console.log(data);
    res.render('list', { accounts: data, moment: moment });
  });
});

// 添加记录
router.get('/account/create', function (req, res) {
  res.render('create');
});

// 新增记录
router.post('/account', function (req, res) {
  // 获取请求体的数据(需要将日期字符串转换成日期对象)
  // '2023-12-21' => moment 包 => new Date()
  // 或者直接 new Date('2023-12-21')
  // console.log(req.body);

  // 插入数据库
  AccountModel.create({
    ...req.body,  // 属性名相同
    time: moment(req.body.time).toDate(),   // 覆盖req.body中的time属性
  }, (err, data) => {
    if (err) {
      res.status(500).send('插入失败');
      return;
    }
    // 成功提醒
    res.render('success', { msg: '添加成功', url: '/account' });
  });


});

// !删除记录
// 要根据id删除元数据 -> 同过请求获取id -> 删除按钮发起get请求并携带id参数
router.get('/account/:id', (req, res) => {
  // 获取id
  const { id } = req.params;
  // 删除
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send('删除失败');
      return;
    }
    // 提醒
    res.render('success', { msg: '删除成功', url: '/account' });
  })
});


module.exports = router;
