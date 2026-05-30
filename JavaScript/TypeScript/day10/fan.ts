// 泛型
function createArray<T>(name: string, value: T) : Array<T> {
    return [value];
}

interface CArr {
    <T>(name: string, value: T) : Array<T>;
}
let ctArr: CArr = function<T>(name: string, value: T) : Array<T> {
    return []
}


