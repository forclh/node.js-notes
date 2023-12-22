var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {  // 相当于/user路径
  res.send('respond with a resource');
});

module.exports = router;
