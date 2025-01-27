const mongoose = require('mongoose');

// Define the mongoDB connectionURL

const mongoURL = 'mongodb://localhost:27017/School'

// set up MongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// set the default connection
// mongoose maintain a default connection object representing the MongoDB connection.

const db = mongoose.connection;

// define event listeners for database connection

db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
});

db.on('error', (error)=>{
    console.log('MongoDB connection error', error);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection

module.exports = db;