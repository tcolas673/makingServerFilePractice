// realized that express can build a http module for you
const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log('server running');
})