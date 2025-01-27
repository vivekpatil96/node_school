const express = require('express');
const router = express.Router();
const Result = require('../models/result');

router.post('/', async (req, res) => {

    try {

        const data = req.body;
        const newResult = new Result(data);
        const responce = await newResult.save();
        console.log("savedResult ", responce);
        res.status(200).send(responce);
    } catch (error) {

        console.log(error);
        res.status(500).json({ error: "Internal server Error" });
    }
})


router.get('/', async (req, res) => {
    try {

        const data = await Result.find();
        console.log("data fetched");
        res.status(200).json(data);

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: "Internal server Error" });
    }
})


router.get("/:grade", async (req, res) => {

    try {

        const Grade = req.params.grade;


        if (Grade == "A" || Grade == "B" || Grade == "C") {

            const responce = await Result.find({ grade: Grade });
            console.log("responce", responce);
            res.status(200).json(responce);
        } else {
            res.status(404).json({ eror: "Invalid Grade" });
        }

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: "Invalid server error" });
    }
})

router.put('/:id', async (req, res) => {

    try {

        const resultId = req.params.id;
        updatedResultData = req.body;

        const responce = await Result.findByIdAndUpdate(resultId, updatedResultData, {

            new: true,
            runValidators: true
        })

        if (!responce) {
            return res.status(404).json({ error: " invalid result" });
        }

        console.log("result updated");
        res.status(200).json(responce);

    } catch (error) {

        console.log(error);
        res.status(500).json({error : "Invalid Server side error"});
    }


})

router.delete('/:id', async(req, res) => {

    try{

        const resultId = req.params.id;

        const responce = await Result.findByIdAndDelete(resultId);

        if(!responce){
            return res.status(404).json({error : "Invalid id"});
        }

        console.log("data deleted");
        res.status(200).json({message : "data deleted successfully"});

    }catch(error){

        console.log(error);
        res.status(500).json({error : "Invalid server error"});
    }
})

module.exports = router;