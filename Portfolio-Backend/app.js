// Variables
const express = require('express');
const app = express();

// Set engine to jade
app.set('view engine','jade');

// Basic route
app.get('/',function(req,res)
{
    // Move this to routes folder
});

// Test calls to a test module
// var testModule = require('./tests/test.module');
// console.log(testModule.AddNumber(1,2));

// Starts the server 
let server = app.listen(3000,function()
{
    console.log('Node server running on port 3000');
});
