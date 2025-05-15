const baseURL = 'http://geek.itheima.net';
const getSum = (numA, numB) => numA + numB;
const getArraySum = arr => {
    let sum = 0;
    arr.forEach(item => sum += item);
    return sum;
}

module.exports = {
    url: baseURL,
    getSum
}