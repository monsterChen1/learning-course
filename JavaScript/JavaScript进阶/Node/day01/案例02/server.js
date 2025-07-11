import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer();

const fileType = {
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+html',
    '.gif': 'image/gif',
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
};
server.on('request', (req, res) => {
    res.statusCode = 200;
    if(req.url === '/' || req.url === '/index.html'){
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        fs.access('./index.html', err => {
            if(!err){
                fs.readFile('./index.html', (err, data) => {
                    if(!err){
                        res.end(data);
                    }
                });
            }
        });
    }else{
        // 其他文件直接返回
        // 同时还需要设置各种文件的响应体数据类型
        let ext = path.extname(decodeURIComponent(req.url));
        res.setHeader('Content-Type', fileType[ext]);
        fs.readFile(`./publc${decodeURIComponent(req.url)}`, (err, data) => {
            if(err){
                res.end('error route!');
            }else{
                res.end(data);
            }
        });
    }
});

server.listen('3006', () => {
    console.log("Web服务器启动");
});