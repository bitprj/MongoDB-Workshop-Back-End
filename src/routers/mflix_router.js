const express = require('express')
const router = new express.Router()


//Currently not working
router.get('/questions', (req, res) => {
    const movies = movies.find({})
    console.log(movies)
})


module.exports = router 