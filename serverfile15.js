// all 3

// http only and ran successfully
// const http = require('http');
// const PORT = 3000;
// const requestHandler = (req, res) =>{
//     res.end('Huge progress here');
// }

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) =>{
//     if(err) console.log('we got probs son');
//     console.log('server is running!');
// })

// my http server with express
// ran successfully
// const http = require('http');
// const express = require('express');

// const PORT = 3000;

// const requestHandler = (req, res) =>{
//     res.end('Huge progress here');
// }

// const app = express();

// app.use('/', requestHandler);

// const server = http.createServer(app);

// server.listen(PORT, (err) =>{
//         if(err) console.log('we got probs son');
//         console.log('server is running!');
//     })


// express only
// made 3 different server files in less than 15 minutes
// and I understand every line and the advantages 
// and disadvantages of all 3
const express = require('express');

const app = express();
const requestHandler = (req, res) =>{
    res.end('Did all 3 in less than 15 minutes');
}

app.use('/', requestHandler);

app.listen(3000, (err)=>{
    if(err) console.log('we got probs son!')
    console.log('I\'ve improved');
})


