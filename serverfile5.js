const http = require('http');
const express = require('express');

const app = express();

app.use('/fifth', (req, res) => {
    res.send('my fifth file today');
})

const server = http.createServer(app);

server.listen(3004, (err)=>{
    if(err){
        console.log('Something went wrong');
    }
    console.log('server running');
})