const mongoose = require('mongoose');

// Define the student schema

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    mobile:{
        type: Number,
        required: true
    },
    sub:{
        type : "String",
        enum : ["Marathi", "Science", "English"],
        required : true
    }
});

// create person model

const Person = mongoose.model('Student', studentSchema);
module.exports = Person;