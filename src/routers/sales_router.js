const express = require('express')
const router = new express.Router()

const sales = require('../models/sample_supplies/sales_model')

router.get('/sales_questions/1', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761dcae323e45a93cd2ef'})
        
        res.status(200).send({correctAnswer: data[0]._id, answer: 'E', order:1})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

router.get('/sales_questions/2', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761dcae323e45a93cd034'})
        res.status(200).send({correctAnswer: data[0]._id, answer: 'X', order:2})
    }catch(error){
        
        res.status(400).send(error)
    }
})


router.get('/sales_questions/3', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761dcae323e45a93cd246'})
        res.status(200).send({correctAnswer: data[0]._id, answer: 'P', order:3})
    }catch(error){
        
        res.status(400).send(error)
    }
})
router.get('/sales_questions/4', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761dcae323e45a93cd1db'})
        
        res.status(200).send({correctAnswer: data[0]._id, answer: 'R', order:4})
    }catch(error){

        res.status(400).send(error)
    }
})
router.get('/sales_questions/5', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761deae323e45a93cdedf'})
        res.status(200).send({correctAnswer: data[0]._id, answer: 'E', order:5})
    }catch(error){
        
        res.status(400).send(error)
    }
})
router.get('/sales_questions/6', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761deae323e45a93cdfae'})
        
        res.status(200).send({correctAnswer: data[0]._id, answer: 'S', order:6})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})
router.get('/sales_questions/7', async (req, res)=>{
    try{
        const data = await sales.find({_id: '5bd761ddae323e45a93cdc98'})
        
        res.status(200).send({correctAnswer: data[0]._id, answer: 'S', order:7})
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})



module.exports = router