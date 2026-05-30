// 数组
// 1. 类型+方括号
let arr1: number[] = [1, 2, 3];
let str1: string[] = ["hello", "world", "!"];
let arr: any[] = [1, "hello", true];

// 2. Array+类型 泛型
let arr2: Array<number> = [4, 5, 6];

// 接口表示法
interface IArr {
    [index: number]: number;
}
let arr3: IArr = [1, 2, 3];

interface Istate {
    username: string;
    age: number;
}
interface IArr1 {
    [index: number]: Istate;
}
let arr4: IArr1 = [{username: "张三", age: 23}];