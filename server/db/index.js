class DataAccessLayer
{

    constructor(database, client)
    {
        this.db = client.db(database);

        this.peopleCollection = this.db.collection('people');

     
        // this.personExists("Ray Gaylord");
        // this.peopleExist();

        // this.getAllPeople();
    }


    // Data existence verification methods
    personExists(name)
    {
        // // Get the count of the documents based on given name
        // this.peopleCollection.countDocuments({name: name})
        // .then(function(results) {
          
        //     console.log(results);

        // });
        // // .catch(error => console.error(error))
        
    }


    peopleExist()
    {
        // return this.peopleCollection.countDocuments()
    }


    // Get person/people methods
    getPerson(name)
    {
        // return this.getCollection()
        //     .find({name: name}, { projection: { _id: 0 } }).toArray()
        //     .then(results => {
        //         // console.log(results)
        //     })
        //     .catch(error => console.error(error));
    }

    // Get person/people methods
    getAllPeople()
    {
        // return this.getCollection()
        //     .find({}, { projection: { _id: 0 } }).toArray()
        //     .then(results => {
        //         // console.log(results)
        //     })
        //     .catch(error => console.error(error));
    }
    

    // Change person interests method
    changePersonInterests(name, newInterests)
    {
        // this.getCollection()
        //     .updateOne({ name: name }, { $set: { interests: newInterests } })
        //     .then(
        //         res => console.log(`Updated ${res.result.n} documents`),
        //         err => console.error(`Something went wrong: ${err}`),
        //     );
    }

    // Change person name address method
    changePersonName(name, newAddr)
    {
        // this.getCollection()
        //     .updateOne({ name: name }, { $set: { addr: newAddr } })
        //     .then(
        //         res => console.log(`Updated ${res.result.n} documents`),
        //         err => console.error(`Something went wrong: ${err}`),
        //     );
    }

    // Change person age method
    changePersonAge(name, newAge)
    {
        // this.getCollection()
        //     .updateOne({ name: name }, { $set: { age: newAge } })
        //     .then(
        //         res => console.log(`Updated ${res.result.n} documents`),
        //         err => console.error(`Something went wrong: ${err}`),
        //     );
    }


    // Delete person/people methods
    deletePerson(name)
    {
        // deleteOne({ name: name })
        //     .then(result => {
        //         if (result.deletedCount !== 1) {
        //         throw "Could not find person!";
        //         }
        //     })
        //     .then(result => console.log(`Removed ${result.quantity} documents`))
        //     .catch(err => console.error(`Fatal error occurred: ${err}`));
    }


    getCollection()
    {
        return this.peopleCollection;
    }
}


module.exports = DataAccessLayer