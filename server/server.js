'use strict';

const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb://mongo/peopledb'

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('\n\nConnected to People Database\n\n')
  })
  .catch(error => console.error("\n\n" + error + "\n\n"))

const app = require("./routes/index.js")

// var server = 
var server = app.listen(3000, function() 
{   
    let host = server.address().address
    var port = server.address().port

    console.log("Server listening at http://%s:%s", host, port)
 });