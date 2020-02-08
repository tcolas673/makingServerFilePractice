const http = require('http');
const express = require('express');

const PORT = 3002;

const app = express();

app.use('/third', (req, res)=>{
    res.send('my third attempt');
})

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log('server is running');
})