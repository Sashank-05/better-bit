const MongoClient = require('mongodb').MongoClient;

// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;

    const db = client.db('mydb');
    const collection = db.collection('mycollection');

    // Export data from MongoDB
    collection.find().toArray((err, data) => {
        if (err) throw err;

        console.log(data);

        client.close();
    });
});









