const mongoose = require('mongoose')
const mongooseDB = require('../../db/mongoose')
const db = mongooseDB.mflixDb

const commentSchema = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectID
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    movie_id:{
        type: mongoose.Schema.Types.ObjectID
    },
    text:{
        type:String
    },
    date:{
        type:String
    }
}, {collection:"comments"})

const comments = db.model('comments',commentSchema)

module.exports = comments