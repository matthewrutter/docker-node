// Set up data access layer
var DataAccessLayer = require('./db');
var dataAccessLayer = new DataAccessLayer("peopledb");


// Set routes and pass data access layer into routes that will access data
var Routes = require('./routes');
var routes = new Routes(dataAccessLayer);


// Get the app from the router object
let app = routes.getApp(); 


// Set server listener
let server = app.listen(8080, function()
{
    let host = server.address().address;
    let port = server.address().port;
    
    console.log("Server listening at http://%s:%s", host, port);
});