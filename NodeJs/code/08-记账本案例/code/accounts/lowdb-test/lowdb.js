// 导入 lowdb
// npm i lowdb@1.0.0
// https://www.npmjs.com/package/lowdb/v/1.0.0
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
// 数据会存入db.json文件中
const adapter = new FileSync('db.json');
// 获取db对象
const db = low(adapter);

// -------------API---------------
// 初始化数据
db.defaults({ posts: [], user: {} }).write()

// 写入数据
// posts数组
db.get('posts').push({ id: 2, title: 'lowdb is awesome' }).write();

// 获取数据
let data = db.get('posts').value()
console.log(data);

// 获取单条数据
let singleData = db.get('posts').find({ id: 1 }).value();
console.log(singleData);

// 删除数据
let res = db.get('posts').remove({ id: 1 }).write();
console.log(res);  // 删除的数据

// 更新数据
db.get('posts').find({ id: 2 }).assign({ title: '今天下雨啦' }).write();