const http = require('http');
const express = require('express');

const PORT = 3001;

const requestHandler = (req, res) => {
    console.log(req.url);
    res.send('This is my second server file');
}

const app = express();

app.use('/second', requestHandler);

const server = http.createServer(app);

server.listen(PORT, (err)=> {
    if(err) {
        return console.log('something bad happened', err);
    }

    console.log(`Server is listening on ${PORT}`);
})