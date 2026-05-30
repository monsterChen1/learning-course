// 类型断言
let num: number | string = 0;
num = 20;
// 推荐使用
let add: number = (num as number) + 20;

num = "hello";
let strLen: number = (<string>num).length;

console.log(add, strLen)

function getAssert(name: string | number): number {
    if (typeof name === "string") {
        return name.length
    }
    return name * name;
}
console.log(getAssert("world"), getAssert(20));