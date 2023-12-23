// 与账单相关的接口设置

// 导入模块
const express = require('express');
const router = express.Router();
const moment = require('moment');

const AccountModel = require('../../models/AccountModel.js');


// 记账本列表
router.get('/account', function (req, res, next) {
  // 获取所有的账单信息
  AccountModel.find().sort({ time: -1 }).exec((err, data) => {
    if (err) {
      return res.json({
        // 响应编号(0表示成功，非零表示失败)
        code: '1001',
        // 相应的信息
        msg: '读取失败',
        // 相应的数据
        data: null
      });
    }
    res.json({
      // 响应编号(0表示成功，非零表示失败)
      code: '0000',
      // 相应的信息
      msg: '读取成功',
      // 相应的数据
      data: data
    });
  });
});


// 新增记录
router.post('/account', function (req, res) {
  // 表单验证（可补充，对请求的各字段进行验证）
  // 插入数据库
  AccountModel.create({
    ...req.body,  // 属性名相同
    time: moment(req.body.time).toDate(),   // 覆盖req.body中的time属性
  }, (err, data) => {
    if (err) {
      return res.json({
        // 响应编号(0表示成功，非零表示失败)
        code: '1002',
        // 相应的信息
        msg: '添加失败',
        // 相应的数据 
        data: null
      });
    }
    // 成功提醒
    res.json({
      // 响应编号(0表示成功，非零表示失败)
      code: '0000',
      // 相应的信息
      msg: '添加成功',
      // 相应的数据
      data: data
    });
  });


});

// !删除记录
// 要根据id删除元数据 -> 同过请求获取id -> 删除按钮发起get请求并携带id参数
router.delete('/account/:id', (req, res) => {
  // 获取id
  const { id } = req.params;
  // 删除
  AccountModel.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      return res.json({
        // 响应编号(0表示成功，非零表示失败)
        code: '1003',
        // 相应的信息
        msg: '删除失败',
        // 相应的数据
        data: null
      });
    }
    // 提醒
    res.json({
      // 响应编号(0表示成功，非零表示失败)
      code: '0000',
      // 相应的信息
      msg: '删除成功',
      // 相应的数据
      data: {}
    });
  })
});

// 获取单个账单信息
router.get('/account/:id', (req, res) => {
  // 获取id
  const { id } = req.params;
  // 删除
  AccountModel.find({ _id: id }, (err, data) => {
    if (err) {
      return res.json({
        // 响应编号(0表示成功，非零表示失败)
        code: '1004',
        // 相应的信息
        msg: '获取失败',
        // 相应的数据
        data: null
      });
    }
    // 提醒
    res.json({
      // 响应编号(0表示成功，非零表示失败)
      code: '0000',
      // 相应的信息
      msg: '获取成功',
      // 相应的数据
      data: data
    });
  })
});

// 局部更新账单信息

router.patch('/account/:id', (req, res) => {
  // 获取id
  const { id } = req.params;
  // 删除
  AccountModel.updateOne({ _id: id }, req.body, (err, data) => {
    if (err) {
      return res.json({
        // 响应编号(0表示成功，非零表示失败)
        code: '1005',
        // 相应的信息
        msg: '更新失败',
        // 相应的数据
        data: null
      });
    }
    // 再次查询数据库
    AccountModel.find({ _id: id }, (err, data) => {
      if (err) {
        return res.json({
          // 响应编号(0表示成功，非零表示失败)
          code: '1004',
          // 相应的信息
          msg: '获取失败',
          // 相应的数据
          data: null
        });
      }
      // 提醒
      res.json({
        // 响应编号(0表示成功，非零表示失败)
        code: '0000',
        // 相应的信息
        msg: '更新成功',
        // 相应的数据
        data: data
      });
    })
  })
});

module.exports = router;
