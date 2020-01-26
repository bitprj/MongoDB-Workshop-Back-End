const express = require('express')
const router = new express.Router()

const movies = require('../models/sample_mflix/movies_model')
const comments = require('../models/sample_mflix/comment_model')
const user = require('../models/sample_mflix/user_model')
const theater = require('../models/sample_mflix/theater_model')

//We need to make more routes for different questions. Possibly at least 10

//Movies collection
router.get('/questions/1', async (req, res) => {
    //We might need to delete this so users can fill in the blanks

    try{
        const data = await movies.findById('573a1390f29313caabcd4135')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Comments Collection
router.get('/questions/2', async (req, res) => {
    try{
        const data = await comments.findById('5a9427648b0beebeb6957a08')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Users collection
router.get('/questions/3', async (req, res) => {
    try{
        const data = await user.findById('59b99db5cfa9a34dcd7885b9')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
    
})

router.get('/questions/4', async (req, res) => {
    try{
        const data = await theater.findById('59a47286cfa9a3a73e51e73b')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
    
})


module.exports = router 