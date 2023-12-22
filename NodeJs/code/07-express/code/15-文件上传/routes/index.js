var express = require('express');
var router = express.Router();
const path = require('path');
// 导入formidable(npm i formidable@v2)
const formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 显示网页（表单）
router.get('/portrait', (req, res) => {
  res.render('portrait', { title: 'Express' });
});

// !处理文件上传
router.post('/portrait', (req, res) => {
  // 创建form表单对象
  const form = formidable({
    multiples: true,
    // 设置上传文件的保存目录
    uploadDir: path.resolve(__dirname, '../public/images'),
    // 保持文件后缀
    keepExtensions: true
  });
  // 解析请求报文
  // fields 保存一般的元素，如 text/radio/checkbox/select...
  //files 保存文件内容
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // res.json({ fields, files });
    // !服务器需要保存图片的访问url /images/80bb40b37add5a1f03978f100.jpg
    let url = '/images/' + files.portrait.newFilename;  // 将来需要保存在数据库中
    res.send(url);
  });
});
module.exports = router;
