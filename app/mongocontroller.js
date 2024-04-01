const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err;

    const db = client.db('mydb');
    const collection = db.collection('mycollection');

    collection.find().toArray((err, data) => {
        if (err) throw err;

        console.log(data);

        client.close();
    });
});









