# path 模块

> `path` 模块提供了 `操作路径` 的功能，我们将介绍如下几个较为常用的几个 API：

| **API**       | **说明**                  |
| ------------- | ------------------------- |
| `path.resolve`  | 拼接规范的绝对路径 `常用` |
| `path.sep`      | 获取操作系统的路径分隔符  |
| `path.parse`    | 解析路径并返回对象        |
| `path.basename` | 获取路径的基础名称        |
| `path.dirname`  | 获取路径的目录名          |
| `path.extname`  | 获得路径的扩展名          |

代码示例：

```js
// 导入 fs 模块
const fs = require("fs");
// 导入 path 模块
const path = require("path");

// 写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')
console.log(__dirname + "/index.html");

// resolve 解决问题  拼接绝对路径
console.log(path.resolve(__dirname, "./index.html")); // 第一个参数给绝对路径，后面的给相对路径
console.log(path.resolve(__dirname, "index.html")); // ./可以省略
console.log(path.resolve(__dirname, "/index.html", "./test")); // 不能用/开头，否则会被认为是绝对路径  S:\index.html\test

// sep 获取路径分隔符
console.log(path.sep); //=> window \  linux /

// parse 方法  __filename  '全局变量'
console.log(__filename);

// 解析路径
let str =
  "S:\\Project\\front-end\\notes\\NodeJs\\代码\\03-path模块\\code\\path.js";
console.log(path.parse(str));
// 输出
// {
//   root: 'S:\\',
//   dir: 'S:\\Project\\front-end\\notes\\NodeJs\\代码\\03-path模块\\code',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

// basename  获取文件名
console.log(path.basename(str));  // path.js

// dirname  获取文件夹路径
console.log(path.dirname(str));  // S:\Project\front-end\notes\NodeJs\代码\03-path模块\code

// extname  获取文件扩展名
console.log(path.extname(str));  // .js
```
