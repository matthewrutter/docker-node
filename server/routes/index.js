'use strict';

const bodyParser = require('body-parser');
const mongodb = require('mongodb');

// Set up the express app to begin setting routes
const express = require('express');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Get 
app.get('/', function (req,res)
{
    console.log("Someone made a general get request");

    res.json({ response: "success"});
});


// Get People
app.get('/people', function (req,res)
{
    console.log("Someone made a get request for people");

    res.json({ response: "success"});
});



// Delete Person
app.delete('/person', function (req,res) 
{

    console.log("deleted a person\n");

    res.json({ error: "its good"});
});

console.log(app.route);
module.exports = app;


 //respond to GET request for abcd, abxcd, ab123cd, and so on....
// app.get('/ab*cd', function (req,res) {
//     console.log("Got a get request for /ab*cd");

//     res.send("Page pattern match");
// })