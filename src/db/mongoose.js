const mongoose = require('mongoose')

//I am not sure, but i think at the very end, right before the ?, test can be switched out for the different names of the databases in our sample data inside mongoDB Atlas. 
//I have yet to test it out as I have yet to figure out how to make any CRUD operations without the model

//You have to make an environment Variable to hide your own personal MongoDB Url 
//Do npm i to install dependencies
//Make a config folder with a dev.env file inside
//Put MONGODB_URI=link inside, where link is the mongoDB url from atlas
//please hide all this, including the node_modules inside a .gitignore file
const mflixDb = mongoose.createConnection(process.env.MONGODB_URI_MFLIX, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
})

const airbnbDB = mongoose.createConnection(process.env.MONGODB_URI_AIR_BNB, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
})

const trainingDb = mongoose.createConnection(process.env.MONGODB_URI_TRAINING,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
})


const suppliesDb = mongoose.createConnection(process.env.MONGODB_URI_SUPPLIES,{
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
})


module.exports = {
    mflixDb,
    airbnbDB,
    trainingDb,
    suppliesDb
}