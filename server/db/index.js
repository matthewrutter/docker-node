class DataAccessLayer
{

    constructor(database, client)
    {
        console.log('\n\n\nMade it here\n\n\n');
        // this.db = client.db(database);
        
        
        // peopleCollection = db.collection('people')
    }


    // Data existence verification methods
    personExists(data)
    {


    }

    peopleExist(data)
    {


    }


    // Get person/people methods
    getAllPeople()
    {
        // db.collection(peopleCollection).find().toArray()
        // .then(results => {
        //   console.log(results)
        // })
        // .catch(error => console.error(error))
        // console.log('\n\n\nMade it fresh\n\n\n');
        // return "made it here though";
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