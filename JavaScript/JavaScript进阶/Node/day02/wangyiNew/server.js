import http from 'http';
import axios from 'axios';

axios.defaults.baseURL = 'http://c.m.163.com';
const server = http.createServer();

// 其他接口
const apiObj = {
    '/api/head': '/nc/article/headline/T1348647853363/0-40.html',
    '/api/happy': '/nc/article/list/T1348648517839/0-40.html',
    '/api/sports': '/nc/article/list/T1348649079062/0-40.html',
    '/api/money': '/nc/article/list/T1348648756099/0-40.html',
    '/api/technology': '/nc/article/list/T1348649590692/0-40.html',
};

server.on('request', (req, res) => {
    // 获取头条新闻
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url in apiObj){
        let apiUrl = apiObj[req.url];
        axios({
            url: apiUrl
        }).then(result => {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(result.data));
        });
    }else{
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('欢迎使用接口服务');
    }
});

server.listen('3000', () => {
    console.log('服务启动成功: http://localhost:3000');
});