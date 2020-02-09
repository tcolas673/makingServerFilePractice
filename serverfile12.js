// express creating http server for me

const express = require('express');

const PORT = 3000;
const app = express();

const requestHandler = (req, res) => {
    res.end('We in this bitch!');
}

app.use('/', requestHandler);

app.listen(PORT, (err)=>{
    if(err) console.log('we got probs son');
    console.log('server is running!');
})