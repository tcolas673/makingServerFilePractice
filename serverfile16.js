const http = require('http');
const express = require('express');

const PORT = 3000;

const tempHandler = (req, res) => {
    res.send('I don\'t know where I went wrong');
}

const app = express();

app.use('/', tempHandler);

const server = http.createServer(app);

server.listen(PORT, (err)=>{
    if(err) console.log('we got probs!');
    console.log('server is running!');
})