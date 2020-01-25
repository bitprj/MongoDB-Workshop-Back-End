const express = require('express')
const router = new express.Router()

const movies = require('../models/movies_model')

//We need to make more routes for different questions. Possibly at least 10
router.get('/questions/1', async (req, res) => {
    //We might need to delete this so users can fill in the blanks

    try{
        const data = await movies.findById('573a1390f29313caabcd4135')
        res.status(200).send(data)
    }catch(error){
        res.status(400).send(error)
    }
    
})

module.exports = router 