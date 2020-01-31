const express = require('express')
const auth = require('../middleware/auth')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const router = new express.Router()

//Sessions collection not added, I dont think its interesting enough to add - jose
const movies = require('../models/sample_mflix/movies_model')
const comments = require('../models/sample_mflix/comment_model')
const user = require('../models/sample_mflix/user_model')
const theater = require('../models/sample_mflix/theater_model')

//We need to make more routes for different questions. Possibly at least 10
//Make sure to format what you are sending, meaning send a JSON object containing only answer

//Movies collection
router.get('/mflix_questions/1', async (req, res) => {
    //We might need to delete this so users can fill in the blanks
    console.log('Second')
    // q1
    // await bcrypt.hash("573a1390f29313caabcd60e4", 10).then(hash => {
    //     console.log(hash) // $2b$10$TTn5b5GxInDkg/Dp4QQQuuIRJ/yTjk3EM4nX2KfyKbuvR7Mj/Fzo2
    // })
    // // q2
    // await bcrypt.hash("5a9427648b0beebeb6957a72", 10).then(hash => {
    //     console.log(hash) // $2b$10$HGcpYpsjhGY4tuRBEuSLA.NswdNZ1UHkzIc1prefgItqPFMVv78m.
    // })

    try{
        const data = await movies.findById(req.body._id)
        res.status(200).send({answer : data.plot[0], order:1})
        
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Comments Collection
router.get('/mflix_questions/2', async (req, res) => {
    try{
        const data2 = await movies.findById('573a1390f29313caabcd4135')

        const data = await comments.findById('5a9427648b0beebeb6957a72')
        res.status(200).send({answer:data.name[0], order:2})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Users collection
router.get('/mflix_questions/3', async (req, res) => {
    try{
        const data3 = await movies.findById('')

        const q3_hashed_answer = ""
        
        res.status(200).send({answer: data.name[0], order:3})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Theater collection
router.get('/mflix_questions/4', async (req, res) => {
    try{
        const data4 = await movies.findById('')

        
        res.status(200).send({answer: data.location.address.city[0], order:4})
    }catch(error){
        res.status(400).send(error)
    }
    
})



module.exports = router 