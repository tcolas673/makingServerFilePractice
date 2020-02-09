const express = require('express');

const app = express();


const requestHandler = (req, res) => {
    res.send('We in this bitch');
}

app.use('/', requestHandler);

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('server running');
})
// what's inside on express it creates our own http server
// app.listen = function() {
//     var server = http.createServer(this);
//     return server.listen.apply(server, arguments);
//   };