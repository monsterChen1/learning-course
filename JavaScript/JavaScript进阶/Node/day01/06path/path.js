import path from 'path';

const jsonPath = './data/index.json';
// 文件的拓展名
console.log(path.extname(jsonPath)); //.json

// 拼接路径 相对路径
console.log(path.join('data', 'index.json')); // data/index.json
console.log(path.join('a', 'b', '../c', 'd')); // a/c/d
console.log(path.join('a', 'b', '..', 'c')); // a/c

// 拼接路径 绝对路径
console.log(path.resolve('data', 'index.json'));
console.log(path.resolve('a', 'b', '../c', 'd')); // a/c/d
console.log(path.resolve('a', 'b', '..', 'c')); // a/c