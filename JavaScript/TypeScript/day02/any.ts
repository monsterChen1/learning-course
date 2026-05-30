let num1: any = 1;
num1 = true;
num1 = "3";

// TypeScript 类型推断
// 未指定类型，根据初始值推断类型
let a = 1;
let b = "world";

// 没有赋值操作 推断为any类型
let num3;
num3 = "hello";
num3 = 123;