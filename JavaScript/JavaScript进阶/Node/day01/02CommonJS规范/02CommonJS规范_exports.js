const baseURL = 'http://geek.itheima.net';
const getSum = (numA, numB) => numA + numB;
const getArraySum = arr => {
    let sum = 0;
    arr.forEach(item => sum += item);
    return sum;
}
// module.exports 指向一个空对象
// exports 指向 module.exports
module.exports = {
    url: baseURL,
    getSum
}