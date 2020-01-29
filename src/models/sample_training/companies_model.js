const mongoose = require('mongoose')
const mongooseDb = require('../../db/mongoose')
const db = mongooseDb.trainingDb

//Just found out you don't need to imitate the whole model -_-
const companiesSchema = new mongoose.Schema({
    name:{
        type:String
    },
    permalink:{
        type:String
    },
    crunchbase_url:{
        type:String
    },
    homepage_url:{
        type:String
    },
    blog_url:{
        type:String
    },
    blog_feed_url:{
        type:String
    }
},{collection:'companies'})

const companies = db.model('companies', companiesSchema)

module.exports = companies