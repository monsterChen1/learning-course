const a = 10;
const b = 20;

const fn = () => {
    console.log('这是一个函数');
};

// ES6默认导出
// 单独导出变量a
// export default a;

// 默认导出对象
export default {
    a,
    b,
    fn
};