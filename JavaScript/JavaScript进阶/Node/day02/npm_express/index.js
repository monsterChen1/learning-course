const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // console.log(req, res);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send('Hello Express!');
});

app.listen(port, () => {
    console.log('Sever is running')
});