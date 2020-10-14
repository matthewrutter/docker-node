'use strict';

const app = require("./routes/index.js")

// var server = 
var server = app.listen(3000, function() 
{   
    let host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port)
 });