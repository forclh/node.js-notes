// 贴膜
function tiemo() {
  console.log('贴膜...');
}

// 捏脚
function niejiao() {
  console.log('捏脚...')
}


// 暴露数据方式一
// 注意事项：module.exports 可以暴露任何数据
// module.exports = 'iloveyou'
module.exports = {
  tiemo: tiemo,
  niejiao,  // 可以简写
}

// 暴露数据方式二
// 注意事项：不能使用 export = value 的形式暴露数据
exports.niejiao = niejiao;
exports.tiemo = tiemo;


// ! module.exports = exports = {}
// module.exports 和 exports 存放相同的引用
// export = value 方式打断了引用