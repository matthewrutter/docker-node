const bodyParser = require('body-parser');

class Routes
{

    constructor(dataAccessLayer)
    {
        // Set up the express app to begin setting routes
        var express = require('express');
        this.app = express();


        //  Set bodyparser functionality for express app
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));


        // Create CRUD routes with provided data leyer
        this.setCreateRoutes(dataAccessLayer);
        this.setReadRoutes(dataAccessLayer);
        this.setUpdateRoutes(dataAccessLayer);
        this.setDeleteRoutes(dataAccessLayer);
    }


    setCreateRoutes(data)
    {
        console.log('\n\n\nSet All Creation Routes\n\n\n')


    }


    setReadRoutes(data)
    {
        console.log('\n\n\nSet All Read Routes\n\n\n')

    }



    setUpdateRoutes(data)
    {
        console.log('\n\n\nSet All Update Routes\n\n\n')

    }


    setDeleteRoutes(data)
    {
        console.log('\n\n\nSet All Deletion Routes\n\n\n')

    }


    getApp() 
    {
        return this.app;    
    }

}


module.exports = Routes

