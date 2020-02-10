const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send('I will better myself!');
})

app.listen(3000, (err)=>{
    if(err) console.log('server is not running!');
    console.log('server is running!');
})