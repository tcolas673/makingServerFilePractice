const express = require('express');

const app = express();
// The app returned by express() is in fact a JavaScript Function, 
// DESIGNED TO BE PASSED to Node’s HTTP servers as a callback to handle requests.

// This makes it easy to provide both HTTP and HTTPS versions of your app 
// with the same code base, as the app does not inherit from these 
// (it is simply a callback):

const requestHandler = (req, res) => {
    res.send('We in this bitch');
}

app.use('/', requestHandler);

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    console.log('server running');
})