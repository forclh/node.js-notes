// 1. alloc
// 创建一个十个字节的buffer, 将内存中每个字节都清零
let buf = Buffer.alloc(10);
console.log(buf);

// 2. allocUnsafe
// 创建的buffer可能存在旧内存数据，速度比使用alloc快
let buf2 = Buffer.allocUnsafe(10000);
console.log(buf2);

// 3. from
// 将字符串转为buffer
let buf3 = Buffer.from('hello');  // 每个字符都会转换成Unicode码表数字对应的二进制
console.log(buf3);  // 打印是默认以十六进制显示
// 将数组转为buffer
let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);  // 每个数字都会转换成二进制
console.log(buf4);