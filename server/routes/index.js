const bodyParser = require('body-parser');
const express = require('express');

class Routes
{

    constructor(dataAccessLayer)
    {
        this.setApp();

        //  Set bodyparser functionality for express app
        this.getApp().use(bodyParser.json());
        this.getApp().use(bodyParser.urlencoded({extended: false}));


        // Create CRUD routes with provided data leyer
        this.setCreateRoutes(dataAccessLayer);
        this.setReadRoutes(dataAccessLayer);
        this.setUpdateRoutes(dataAccessLayer);
        this.setDeleteRoutes(dataAccessLayer);
    }


    setCreateRoutes(data)
    {
        this.getApp().post('/person', function (req,res) 
        {
            // make sure the user put stuff into the post request
            if (req.body.name == null) return res.json( { error: 'Please enter a name.'} );

            if (req.body.age == null) return res.json( { error: 'Please enter an age.'} );

            if (req.body.interest == null) return res.json( { error: 'Please enter an interest.'} );

                          
            data.insertPerson(req.body.name, req.body.age, req.body.interest)
            .then(results => {
                return res.json( { success: "Added person to database" } );
            })
            .catch(error => { res.json( { error: "Fatal error: " + error } ) });
        });
    }


    setReadRoutes(data)
    {
        this.getApp().get('/person', function(req,res) 
        {
            // make sure the user put stuff into the post request
            if (req.query.name == null) return res.json( { error: "Please enter a name."} );

            data.getPerson(req.query.name)
            .then(results => {
                console.log(results);
                return res.json(results);
            })
            .catch(error => { res.json( { error: "Fatal error: " + error } ) });
        });


        this.getApp().get('/people', function(req,res) 
        {
            data.getAllPeople()
            .then(results => {
                console.log(results);
                return res.json(results);
            })
            .catch(error => { res.json( { error: "Fatal error: " + error } ) });
        });
    }



    setUpdateRoutes(data)
    {
        this.getApp().put('/person', function(req,res) 
        {
            // make sure the user put stuff into the post request
            if (req.body.name == null) return res.json( { error: 'Please enter a name.'} );

            if (req.body.age == null) return res.json( { error: 'Please enter a name.'} );

            if (req.body.interest == null) return res.json( { error: 'Please enter a name.'} );


            data.changePersonInfo(req.body.name, req.body.age, req.body.interest)
            .then(result => {
                console.log(result);
                return res.json( { success: "Updated person data in database" } );
            })
            .catch(error => { res.json( { error: "Fatal error: " + error } ) });
        });
    }


    setDeleteRoutes(data)
    {
        this.getApp().delete('/person', function (req,res) 
        {
            // make sure the user put stuff into the post request
            if (req.query.name == null) return res.json( { error: 'Please enter a name.'} );


            data.deletePerson(req.query.name)
            .then(result => {

                // if nothing was deleted return an error
                if (result.deletedCount !== 1) {
                    return res.json( { error: "No document found. Nothing removed." } );
                }

                // if nothing is wrong return a success
                return res.json( { success: "Removed " + req.query.name + " from database" } );
            })
            .catch(error => { res.json( { error: "Fatal error: " + error } ) });
        });
    }


    setApp() 
    {
        this.app = express();  
    }


    getApp() 
    {
        return this.app;    
    }

}


module.exports = Routes

