const express = require('express');
const app = express();

app.use('/', (req, res)=> {
    res.send('I did it!');
})

app.listen(3000, (err) => {
    if(err) console.log(err);
    console.log('server is running!');
})