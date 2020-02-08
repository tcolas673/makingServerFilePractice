const http = require('http');
const express = require('express');

const PORT = 3003;

const app = express();

const requestHandler = (req, res)=>{
    res.send('my fourth attempt');
}

app.use('/fourth', requestHandler);

const server = http.createServer(app);

server.listen(PORT, (err)=>{
    if(err){
        console.log('Something went wrong');
    }
    console.log('Server is running');
})