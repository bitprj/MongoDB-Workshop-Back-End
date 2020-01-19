const mongoose = require('mongoose')

//I am not sure, but i think at the very end, right before the ?, test can be switched out for the different names of the databases in our sample data inside mongoDB Atlas. 
//I have yet to test it out as I have yet to figure out how to make any CRUD operations without the model

//You have to make an environment Variable to hide your own personal MongoDB Url 
//Do npm i to install dependencies
//Make a config folder with a dev.env file inside
//Put MONGODB_URI=link inside, where link is the mongoDB url from atlas
//please hide all this, including the node_modules inside a .gitignore file
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
    useCreateIndex: true
})