const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({

    totalmarks:{
    type:'Number',
    required: true
    },

    percentage:{
        type:"Number",
        required: true,
    },

    grade:{
        type:"String",
        enum: ["A", "B", "C"],
        required: true
    }
})

const Result = mongoose.model("result", resultSchema);
module.exports = Result;