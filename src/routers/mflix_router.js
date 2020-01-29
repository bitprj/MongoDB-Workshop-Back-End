<<<<<<< HEAD
const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()

//Sessions collection not added, I dont think its interesting enough to add - jose
const movies = require('../models/sample_mflix/movies_model')
const comments = require('../models/sample_mflix/comment_model')
const user = require('../models/sample_mflix/user_model')
const theater = require('../models/sample_mflix/theater_model')

//We need to make more routes for different questions. Possibly at least 10
//Make sure to format what you are sending, meaning send a JSON object containing only answer

//Movies collection
router.get('/mflix_questions/1', auth, async (req, res) => {
    //We might need to delete this so users can fill in the blanks
    console.log('Second')
    try{
        const data = await movies.findById('573a1390f29313caabcd4135')
        res.status(200).send({answer : data.plot[0], order:1})
        
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Comments Collection
router.get('/mflix_questions/2', async (req, res) => {
    try{
        const data = await comments.findById('5a9427648b0beebeb6957a08')
        res.status(200).send({answer:data.name[0], order:2})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Users collection
router.get('/mflix_questions/3', async (req, res) => {
    try{
        const data = await user.findById('59b99db5cfa9a34dcd7885b9')
        res.status(200).send({answer: data.name[0], order:3})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Theater collection
router.get('/mflix_questions/4', async (req, res) => {
    try{
        const data = await theater.findById('59a47286cfa9a3a73e51e73b')
        res.status(200).send({answer: data.location.address.city[0], order:4})
    }catch(error){
        res.status(400).send(error)
    }
    
})


=======
const express = require('express')
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

    try{
        const data = await movies.findById('573a1390f29313caabcd4135')
        res.status(200).send({answer : data.plot[0], order:1})
        
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Comments Collection
router.get('/mflix_questions/2', async (req, res) => {
    try{
        const data = await comments.findById('5a9427648b0beebeb6957a08')
        res.status(200).send({answer:data.name[0], order:2})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Users collection
router.get('/mflix_questions/3', async (req, res) => {
    try{
        const data = await user.findById('59b99db5cfa9a34dcd7885b9')
        res.status(200).send({answer: data.name[0], order:3})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Theater collection
router.get('/mflix_questions/4', async (req, res) => {
    try{
        const data = await theater.findById('59a47286cfa9a3a73e51e73b')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
    
})

>>>>>>> 4f9976aba721847ff7b1f91ceb1b90cbf86c7918
module.exports = router 