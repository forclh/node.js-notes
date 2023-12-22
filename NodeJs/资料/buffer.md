# Buffer

## 1. 概念
Buffer是一个类似于数组的**对象**，用于表示**固定长度的字节序列**。
Buffer本质是一段内存空间，专门用来处理**二进制数据** 。

## 2. 特点
1. Buffer大小固定且无法调整
2. Buffer性能较好，可以直接对计算机内存进行操作
3. Buffer中每个元素的大小为 1 字节（byte）
## 3. 使用

### 3.1 创建Buffer

Node.js中创建Buffer的方式主要如下几种：
- `Buffer.alloc`
```js
//创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
let buf_1 = Buffer.alloc(10); // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
```
- `Buffer.allocUnsafe`

```js
//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫unsafe
let buf_2 = Buffer.allocUnsafe(10);
```

- `Buffer.from`
```js
//通过字符串创建 Buffer
let buf_3 = Buffer.from('hello');
//通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
```