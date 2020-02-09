// realized that express can build a http module for you
const express = require('express');

const app = express();

app.listen(3000, (err)=>{
    if(err){
        console.log('we got probs man');
    }
    console.log('server running');
})