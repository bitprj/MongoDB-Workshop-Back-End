const express = require('express')
const router = new express.Router()

const company = require('../models/sample_training/companies_model')
const inspections = require('../models/sample_training/inspections_model')

//company model
router.get('/training_questions/1', async (req, res)=> {
    try{
        const data = await company.find({_id:'52cdef7e4bab8bd67529abca'})
        res.status(200).send({correctAnswer: data[0]._id, answer : 'C', order:1})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

//inspection model
router.get('/training_questions/2', async (req, res)=> {
    try{
        const data = await company.find({_id:'52cdef7c4bab8bd675297fca'})
        res.status(200).send({correctAnswer: data[0]._id, answer : 'A', order:2})
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/training_questions/3', async (req, res)=> {
    try{
        const data = await company.find({_id:'52cdef7c4bab8bd675298181'})
        res.status(200).send({correctAnswer: data[0]._id, answer : 'T', order:3})
    }catch(error){
        res.status(400).send(error)
    }
})

router.get('/training_questions/4', async (req, res)=> {
    try{
        const data = await company.find({_id:'52cdef7e4bab8bd67529ace4'})
        res.status(200).send({correctAnswer: data[0]._id, answer : 'S', order:4})
    }catch(error){
        res.status(400).send(error)
    }
})



module.exports = router