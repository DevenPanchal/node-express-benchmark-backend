const mongoose = require('mongoose');

const dev_mongo_url = 'mongodb://localhost:27017/newsAPI';
const URL = process.env.MONGODB_URI || dev_mongo_url;

mongoose.connect(URL)
    // we are using the then promise here
    .then(db => { console.log('Database connection established successfully') })
    .catch(error => {
        console.log('Error in Database connection');
    });

module.exports = mongoose;
