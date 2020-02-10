const mongoose = require('mongoose')
const mongooseDb = require('../../db/mongoose')
const db = mongooseDb.suppliesDb

const salesSchema = new mongoose.Schema({
    storeLocation: {
        type: String
    },
    customer:{
        age:{
            type:Number
        },
        email: {
            type:String
        }
    },
    purchaseMethod:{
        type:String
    }
},{collection: "sales"})

const sales = db.model('sales', salesSchema)

module.exports = sales