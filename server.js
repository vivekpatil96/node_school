const express = require('express');
const users = require('./mockData');
const fs = require('fs');
const app = express();
app.use(express.json());
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Welcome to our School');
});

// Import the-router files

const studentRoutes = require('./routes/studentRoutes');
const resultRoutes = require('./routes/resultRoutes');

// use the routes

app.use("/student", studentRoutes);
app.use("/result", resultRoutes);



app.listen(PORT, ()=>{
    console.log("listining on port 3000")
});