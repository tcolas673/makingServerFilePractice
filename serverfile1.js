const http = require('http');
const express = require('express');

const PORT = 3000;

const app = express();

app.use('/weather', (req, res)=>{
    console.log(req.url);
    res.end('Hello Node.js Server');
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
  });