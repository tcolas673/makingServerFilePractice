// my own http server

const http = require('http');
const express = require('express');

const PORT = 3000;

const requestHandler = (req, res) => {
    res.end('We in this trick!');
}

const app = express();

app.use('/', requestHandler);

const server = http.createServer(app);

server.listen(PORT, (err) => {
 if(err){
     console.log('we got probs son!');
 }
 console.log('server is running');
});
