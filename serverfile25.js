const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send('what hurts now will change my life if I push through!');
})

app.listen(3000, (err)=> {
    if(err) console.log(err);
    console.log('server is running');
})