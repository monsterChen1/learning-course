// 导入模块
const req = require('./02CommonJS规范_exports.js');

// 使用导入功能
console.log(req.url);
console.log(req.getSum(1, 2));

// 未暴露的功能无法使用
// console.log(req.getArraySum([1, 2, 3]));