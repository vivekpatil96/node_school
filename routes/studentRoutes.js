const express = require('express');
const Person = require('../models/student');
// const Student = require('../models/student');
const router = express.Router();
// const Person = require('./models/student');

router.post('/', async(req, res) => {

    try{

        const data = req.body;
        const newStudent = new Person(data);
      const responce =  await newStudent.save();
      console.log("savedStudent ", responce);
      res.status(200).send(responce);
    }catch(error){

        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }

});

router.get('/', async (req, res) => {
    try{

        // const data = await Student.find();
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);

    }catch(error){

        console.log(error);
        res.status(500).json({error: "Internal server Error"});
    }
})


router.get('/:sub', async(req, res) => {

    try{

        const subject = req.params.sub;

        if(subject == "Marathi" || subject == "Science" || subject == "English" ){

            const responce = await Person.find({ sub: subject})
            console.log("responce", responce);
            res.status(200).json(responce);
        }else{

            res.status(404).json({ error : "Invalid subject"});
        }
        

    }catch(error){

        console.log(error);
        res.status(500).json({error : "Invalid server error"});
    }
})


router.put('/:id', async (req, res) => {
    try{

      const studentId = req.params.id;
      const updatedStudentData = req.body;

        const responce = await Person.findByIdAndUpdate(studentId, updatedStudentData, {

            new : true,
            runValidators : true,
        })

        if (!responce){
            return res.status(404).json({error : 'Student not found'});
        }

        console.log("data updated");
        res.status(200).json(responce);

    }catch(error){

        console.log(error);
        res.status(500).json({error : "Invalid server error"});
    }
})

router.delete('/:id', async (req, res) => {

    try{

        const studentId = req.params.id;

        const responce = await Person.findByIdAndDelete(studentId);

        if(!responce){
            return res.status(404).json({error : "user not found"});
        }
        console.log("data deleted");
        res.status(200).json({message : "Person deleted successfully"});

    }catch(error){
        console.log(error);
        res.status(500).json({error : "Invalid server error"});
    }
})

module.exports = router;