// 定义接口
interface Istate {
    name: string,
    age: number
}

interface Istate1 {
    name: string,
    // 可选属性
    age?: number
}

// 属性个数不确定
interface Istate3 {
    name: string,
    age?: number,
    // 任意属性名 任意类型
    [propName: string]: any;
}

// 只读属性
interface Istate4 {
    name: string,
    readonly age: number
}

let obj: Istate;
// obj = { name: 1 };
obj = { name: "monster", age: 10 };

let obj1: Istate1;
obj1 = { name: "monster" };

let obj3: Istate3;
obj3 = { name: "monster", age: 30, sex: "男", job: "program" }

let obj4: Istate4;
obj4 = { name: "monster", age: 10 };
obj4.name = "monster1";
// obj4.age = 10; // 只读