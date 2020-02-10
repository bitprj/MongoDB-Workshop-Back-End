const express = require('express')
const router = new express.Router()

//This is the only collection in the sample_airbnb database
const listings = require('../models/sample_airbnb/listings_model')

router.get('/airbnb_questions/1', async (req, res) => {
    try{   
        const data = await listings.find({_id:'10488837'});
        console.log(data[0]._id)
        res.status(200).send({correctAnswer:data[0]._id, answer:'M', order:1})

    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/airbnb_questions/2', async(req, res) =>{
    try{
         const data = await listings.find({_id: '685373'})
         res.status(200).send({correctAnswer:data[0]._id, answer:'O', order:2})
    }catch(error){
        res.status(400).send(error)
    }
})
router.get('/airbnb_questions/3', async(req, res) =>{
    try{
         const data = await listings.find({_id: '15591661'})
         res.status(200).send({correctAnswer:data[0]._id, answer:'N', order:3})
    }catch(error){
        res.status(400).send(error)
    }
})
router.get('/airbnb_questions/4', async(req, res) =>{
    try{
         const data = await listings.find({_id: '10066928'})
         res.status(200).send({correctAnswer:data[0]._id, answer:'G', order:4})
    }catch(error){
        res.status(400).send(error)
    }
})
router.get('/airbnb_questions/5', async(req, res) =>{
    try{
         const data = await listings.find({_id: '22123688'})
         res.status(200).send({correctAnswer:data[0]._id, answer:'O', order:5})
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/airbnb_questions/6', async(req, res) =>{
    try{
         const data = await listings.find({_id: '20701559'})
         res.status(200).send({correctAnswer:data[0]._id, answer:'D', order:6})
    }catch(error){
        res.status(400).send(error)
    }
})
router.get('/airbnb_questions/7', async(req, res) =>{
    try{
         const data = await listings.find({_id: '26077159'})
         res.status(200).send({correctAnswer:data[0]._id, answer:'B', order:7})
    }catch(error){
        res.status(400).send(error)
    }
})



module.exports = router