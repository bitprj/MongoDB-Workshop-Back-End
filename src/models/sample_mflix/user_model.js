const mongoose = require('mongoose')
const mongooseDB = require('../../db/mongoose')
const db = mongooseDB.mflixDb

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
}, {collection:'users'})

const users = db.model('users', userSchema)

module.exports = users