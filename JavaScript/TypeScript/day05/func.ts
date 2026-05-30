// 声明式类型函数
function funcType(name: string, age: number): number {
    return age;
}

let ageNum: number = funcType("monster", 30);
console.log(ageNum);

// 可选参数
function funcType2(name: string, age: number, sex?: string): string {
    return `${age} ${sex ?? '未知'}`;
}
let ageNum2: string = funcType2("monster", 20, "男");
console.log(ageNum2);

// 参数默认值
function funcType3(name: string, age: number = 18): number {
    return age;
}
let ageNum3: number = funcType3("hello");
console.log(ageNum3);

// 匿名函数
let funcType4 = function(name: string, age: number) : number {
    return age;
}

// 函数约束
let funcType5: (name: string, age: number) => number = function(name: string, age: number) : number {
    return age;
}
// 接口去约束
interface funcTT {
    (name: string, age: number): number;
}
let funcType6: funcTT = function(name: string, age: number) : number {
    return age;
}

