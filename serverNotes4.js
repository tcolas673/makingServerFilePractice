// What exactly is the Express Router? It is a mini 
// express application without all the bells and whistles 
// of an express application, just the routing stuff.

// so I could set up a file to handle routing for my server and use 
// const UserRouter = require('express').Router()

// https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4

// apply the routes to our application
// app.use('/', router);


// This is very powerful because we can create multiple express.Router()s 
// and then apply them to our application. We could have a Router for our 
// basic routes, authenticated routes, and even API routes.

// Using the Router, we are allowed to make our applications more modular 
// and flexible than ever before by creating multiple instances of the Router 
// and applying them accordingly.


// Route middleware in Express is a way to do something before a request is processed. 
// This could be things like checking if a user is authenticated, logging data for 
// analytics, or anything else we'd like to do before we actually spit out information 
// to our user.

// We'll use router.use() to define middleware. This will now be applied to all of the 
// requests that come into our application for this instance of Router

// const Router = express.Router() => Router.route().get() or Router.get() the difference
// is that you can set up a chain for other methods using Router.route()