// Person类
class Person {
    public name: string;
    private age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public sayAge() {
        console.log(this.age);
    }
}

// 实例
let zs: Person = new Person("张三", 30)
// zs.age; // 私有属性不能自己访问
zs.sayAge()