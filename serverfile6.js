const http = require('http');

const requestHandler = (req, res) => {
    res.end('We in this bitch!');
}

const server = http.createServer(requestHandler);

server.listen(3005, (err) =>{
    if(err) {
        console.log('we got probs son');
    }
    console.log('server is running');
})
