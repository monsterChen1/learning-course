// 命名导出
export const a = 10;
export let b = 20;
export const fn = () => {
    console.log( a + b );
}

// 默认导出
export default {
    name: 'xx',
    age: 18
};