const express = require('express')
const auth = require('../middleware/auth')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const router = new express.Router()

const {mflixDb, mflixConnect} = require('../db/mongodb')

//Sessions collection not added, I dont think its interesting enough to add - jose
const movies = require('../models/sample_mflix/movies_model')
const comments = require('../models/sample_mflix/comment_model')
const user = require('../models/sample_mflix/user_model')
const theater = require('../models/sample_mflix/theater_model')

//We need to make more routes for different questions. Possibly at least 10
//Make sure to format what you are sending, meaning send a JSON object containing only answer
//backend will send out the correct answer, front end will compare with user answer and see if correct

//Movies collection
router.get('/mflix_questions/1', async (req, res) => {
    try{
        const data = await movies.find({_id:'573a13a3f29313caabd0edc7'})
        res.status(200).send({correctAnswer: data[0]._id, answer : 'Q', order:1})
        
    }catch(error){

        res.status(400).send(error)   
    }
    
})


router.get('/mflix_questions/2', async (req, res) => {
    try{

        const data = await movies.find({_id:'573a13f7f29313caabde64d5'})
        // console.log(data)
        res.status(200).send({correctAnswer: data[0]._id, answer : 'U', order:2})
    }catch(error){
        res.status(400).send(error)
    }
    
})

//Users collection
router.get('/mflix_questions/3', async (req, res) => {
    try{
        const data = await movies.find({_id: '573a1399f29313caabcecc44'})
        // console.log(data)
        res.status(200).send({correctAnswer: data[0]._id, answer : 'E', order:3})
    }catch(error){
        res.status(400).send(error)
    }
    
})


router.get('/mflix_questions/4', async (req, res) => {
    try{
        //573a13a0f29313caabd05acc
        const data = await movies.find({_id: '573a13a0f29313caabd05acc'})

        // console.log(data)
        res.status(200).send({correctAnswer: data[0]._id, answer : 'R', order:4})
    }catch(error){
        res.status(400).send(error)
    }
    
})

router.get('/mflix_questions/5', async (req, res)=>{
    try{
        const data = await movies.find({_id:'573a1399f29313caabcee2a6'})
        console.log(data)
        res.status(200).send({correctAnswer: data[0]._id, answer : 'Y', order:5})
        
        
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})



module.exports = router 