const http = require('http');


const tempHandler = (req, res)=>{
    res.write('If it was easy, everyone would do it!')
    res.end();
}
const server = http.createServer(tempHandler);

server.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log('Server is running on Port 3000');
})