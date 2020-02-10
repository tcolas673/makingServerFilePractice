const express = require('express');

const app = express();

const tempHandler = (req, res) =>{
    res.send('I\'m going to fight!');
}

app.use('/', tempHandler);

app.listen(3000, (err)=>{
    if(err) console.log('server is not working!')
    console.log('server is running!');
})