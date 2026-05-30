// 联合类型
let str: string | number = "10";
// 类型别名
type s2n = string | number;
let str1: s2n = 10;
str1 = "hello";
// str1 = true;

// 类型别名 值约束
type sex = "男" | "女"

let realSex: sex = "男"
// let realSex1: sex = "未知"

// 接口当类型别名
interface objType1 {
    name: string;
}
interface objType2 {
    age: number;
}
type objType = objType1 | objType2;
let obj: objType = {name: "monster", age: 20}
// let obj1: objType = {name: "monster", age: 20, ss: "1"}