const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send('I will put in more effort!');
})

app.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log('server is running!');
})