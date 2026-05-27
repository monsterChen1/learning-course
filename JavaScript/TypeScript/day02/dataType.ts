// string
let message: string = "Hello, TypeScript!";

// number
let age: number = 23;
let price: number = 12.3;

// boolean
let isCompleted: boolean = true;
let isNot: boolean = false;

// Array
let numArr: number[] = [1, 3, 5];
let nameArr: Array<string> = ["张三", "李四"];

// tuple
let person: [string, number] = ["monster", 30];

// enum
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
}
let favoriteColor: Color = Color.Green;

// any
let anyValue: any = "hello";
anyValue = 33;
anyValue = false;
let anyArr: any[] = ["hello", 33, false];

// void
function logMsg(message: string): void {
    console.log(message);
}

// null & undefined
let empty: null = null;
let notAssign: undefined = undefined;

// never
function throwError(message: string): never {
    throw new Error(message);
}

function loop(): never {
    while (true) {}
}

// object
let personObj = { name: 'monster', age: 30 };

// union
let id: string | number;
id = "123";
id = 122;

// unknown
let value: unknown = "Hello";
if (typeof value === "string") {
    let message: string = value;
}

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

