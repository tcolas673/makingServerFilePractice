const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send('Yes, I can!');
})

const server = http.createServer(app);
server.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log('Server is running!')
})