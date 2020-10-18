const MongoClient = require('mongodb').MongoClient;


class DataAccessLayer
{

    constructor(database)
    {

        const URI = 'mongodb://mongo/' + database;

        MongoClient.connect(URI, { useUnifiedTopology: true })
        .then(client => {

            console.log('\n\n\nConnected to ' + database + ' Database\n\n\n')

        })
        .catch(error => console.error("\n\n\n" + error + "\n\n\n"))       

    }

    // Data existence verification methods
    personExists(data)
    {


    }

    peopleExist(data)
    {


    }


    // Get person/people methods
    getAllPeople(data)
    {


    }

    getAllPeople(data)
    {


    }
    

    // Change person method
    changePerson(data)
    {

    }


    // Delete person/people methods
    deletePerson(data)
    {


    }

    deleteAllPeople(data)
    {


    }
}

module.exports = DataAccessLayer