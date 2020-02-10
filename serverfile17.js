const http = require('http');

const express = require('express');

const app = express();

const tempHandler = (req, res) => {
    res.send('was it the dockerfile');
}

app.use('/', tempHandler);

const server = http.createServer(app);

server.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log('server is running!');
})