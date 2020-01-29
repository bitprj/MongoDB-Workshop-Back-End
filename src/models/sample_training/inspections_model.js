const mongoose = require('mongoose')
const mongooseDb = require('../../db/mongoose')
const db = mongooseDb.trainingDb

const inspectionsSchema = new mongoose.Schema({

},{collection:'inspections'})

const inspections = db.model('inspections', inspectionsSchema)

module.exports = inspections