const express = require('express')
const router = new express.Router()

const company = require('../models/sample_training/companies_model')
const inspections = require('../models/sample_training/inspections_model')

//company model
router.get('/training_questions/1', async (req, res)=> {
    try{
        const data = await company.findById('52cdef7c4bab8bd675297d8f')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
})

//inspection model
router.get('/training_questions/2', async (req, res)=> {
    try{
        const data = await inspections.findById('56d61033a378eccde8a8354f')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router