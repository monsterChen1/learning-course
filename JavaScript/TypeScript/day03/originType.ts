let muchType: string = "hello";
// muchType = 10;

// 联合类型-通过通道符 | 来连接多个类型，表示一个值可以是多种类型之一
let muchType2: string | number | boolean = "hello";
muchType2 = 10;
muchType2 = true;