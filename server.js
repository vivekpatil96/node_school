const express = require('express');
const users = require('./mockData');
const fs = require('fs');
const app = express();
app.use(express.json());
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('Welcome to our School');
});

// Import the-router files

const studentRoutes = require('./routes/studentRoutes');
const resultRoutes = require('./routes/resultRoutes');

// use the routes

app.use("/student", studentRoutes);
app.use("/result", resultRoutes);

app.listen(3000, ()=>{
    console.log("listining on port 3000")
});