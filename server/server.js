const MongoClient = require('mongodb').MongoClient;
const DB = "peopledb";
const URI = 'mongodb://root:password@mongo/?authSource=admin';


var DataAccessLayer = require('./db');
var Routes = require('./routes');



MongoClient.connect(URI, { useUnifiedTopology: true })
.then(client => {


    console.log('\n\n\nConnected to ' + DB + ' Database\n\n\n');

    // Set up data access layer with the name of the database and mongoclient passed in
    let dataAccessLayer = new DataAccessLayer(DB, client);


    // Set routes and pass data access layer into routes that will access data
    let routes = new Routes(dataAccessLayer);


    // Get the app from the router object
    let app = routes.getApp(); 


    // Set server listeners
    app.listen(3000, function()
    {
        console.log("Server listening at port 3000");
    });


})
.catch(error => console.error("\n\n\n" + error + "\n\n\n"))  



