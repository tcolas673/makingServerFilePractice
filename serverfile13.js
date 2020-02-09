// No express

const http = require('http');

const PORT = 3000;
const requestHandler = (req, res) =>{
    res.end('I made it!');
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err)=>{
    if(err) console.log('we got issues');
    console.log('server is running!');
})
