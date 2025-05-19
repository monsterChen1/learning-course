// 加载http模块
import http from 'http';

// 创建一个服务对象
const server = http.createServer();

// 给服务对象注册请求（request）事件，监听浏览器的请求。
server.on('request', (req, res) => {
    // req: 请求对象
    // res: 响应对象
    // 设置响应状态码
    res.statusCode = 200;

    // 设置响应头
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // 设置响应体
    res.end('hello, 欢迎访问Node.js Web服务');
});

// 配置服务端口，开启服务
server.listen(3000, () => {
    console.log('Web服务器启动了');
});