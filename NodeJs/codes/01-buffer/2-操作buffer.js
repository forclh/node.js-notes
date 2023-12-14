// buffer与字符串的转换
let buf = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// 在Buffer对象上调用，toString()会将缓冲区中的数据转换成字符串，默认会使用UTF-8编码
console.log(buf.toString());

// buffer的读写 []
let buf1 = Buffer.from('hello');
console.log(buf[0]);  // 十进制
// 在Number对象上调用的，toString()将数字转换为字符串表示形式，并且可以接受一个参数来指定数字的基数
console.log(buf[0].toString(2));  // 转换为二进制 01101001

// 修改buffer的值
console.log(buf1);
buf1[0] = 95;
console.log(buf1);
console.log(buf1.toString());

// 溢出
let buf3 = Buffer.from('hello');
buf3[0] = 361;  // 八个二进制为最高为255（舍弃高于8位的数据）  0001 0110 1001 -> 0110 1001(69)
console.log(buf3);

// 中文
let buf4 = Buffer.from('你好');
console.log(buf4);  // UTF-8中文每个字符占三个字节