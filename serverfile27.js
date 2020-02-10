const express = require('express');

const app = express();

const tempHandler = (req, res)=>{
    res.send('I\'m going to do everything in my power every single day to become a victor and not a victim');
}
app.use('/', tempHandler);

app.listen(3000, (err)=>{
    if(err) console.log(err);
    console.log('server is running!');
})