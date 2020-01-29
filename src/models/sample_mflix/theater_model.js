const mongoose = require('mongoose')
const mongooseDB = require('../../db/mongoose')
const db = mongooseDB.mflixDb

const theaterSchema = new mongoose.Schema({
    theather:{
        type:Number
    },
    location:{
        address:{
            street1:{
                type:String
            },
            city:{
                type:String
            },
            state:{
                type:String
            },
            zipcode:{
                type:String
            }
        },
        geo:{
            type:{
                type:String
            },
            coordinates:[{
                type:Number
            }]
        }
    }
},{collection:'theaters'})

const theaters = db.model('theaters', theaterSchema)

module.exports = theaters