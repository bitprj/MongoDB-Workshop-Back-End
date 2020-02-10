const {MongoClient, Mongo } = require('mongodb')
var mflixDb 

const mflixConnect = MongoClient.connect(process.env.MONGODB_URI_MFLIX,  { 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
      }

      mflix = client.db('sample_mflix') 
      //console.log(mflix.collection('movies').find({}))
})

const airbnbDB = MongoClient.connect(process.env.MONGODB_URI_AIR_BNB, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
      }
})

const trainingDb = MongoClient.connect(process.env.MONGODB_URI_TRAINING,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
      }
})


module.exports = {
    mflixDb,
    airbnbDB,

    trainingDb,
    mflixDb
}