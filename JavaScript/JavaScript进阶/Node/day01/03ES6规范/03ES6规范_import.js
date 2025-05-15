import obj from './03ES6规范_export.js';
console.log(obj.url);
console.log(obj.getSum(2, 3)); 

// 不能使用未导出方法
// console.log(obj.getArraySum([1, 2, 3]));