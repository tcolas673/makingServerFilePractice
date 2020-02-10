const http = require('http');
const express = require('express');

const app = express();

const tempHandler = (res, req) => {
    res.send('maybe it was the dockerfile');
}

app.use('/', tempHandler);

const server = http.createServer(app);

server.listen(3000, (err) => {
    if(err) console.log('server is not running');
    console.log('server is running');
})