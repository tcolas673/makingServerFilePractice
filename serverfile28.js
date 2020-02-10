const http = require('http');

const tempHandler = (req, res) => {
    res.end('Learn from my failures!');
}

const server = http.createServer(tempHandler);

server.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log('server is running!');
})
