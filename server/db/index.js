class DataAccessLayer
{

    constructor(database, client)
    {
        // Get the database from the client with the passed in database string
        this.db = client.db(database);

        // Set the collection for the calls to target
        this.setPeopleCollection(this.db);
    }


    insertPerson(name, age, interest)
    {
        return this.getPeopleCollection().insertOne( { name: name, age: age, interest: interest } );
    }


    // Get person/people methods
    getPerson(name)
    {
        // Get a person based on name from the database
        return this.getPeopleCollection().find( { name: name }, { projection: { _id: 0 } } ).toArray();
    }


    // Get person/people methods
    getAllPeople()
    {
        // Get all people from the database
        return this.getPeopleCollection().find({}, { projection: { _id: 0 } } ).toArray();
    }
    

    // Change person name address method
    changePersonInfo(name, age, interest)
    {
        return this.getPeopleCollection().updateOne( { name: name }, { $set: { age: age, interest: interest } } );
    }


    // Delete person/people methods
    deletePerson(name)
    {
        return this.getPeopleCollection().deleteOne( { name: name } );
    }


    setPeopleCollection(database)
    {
        this.peopleCollection = database.collection('people');
    }


    getPeopleCollection()
    {
        return this.peopleCollection;
    }
}


module.exports = DataAccessLayer