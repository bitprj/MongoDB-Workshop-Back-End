const express = require('express')
const cors = require('cors')
const mflix_router = require('./routers/mflix_router')
const airbnb_router = require('./routers/airbnb_router')
const training_router = require('./routers/training_router')
const supplies_router = require('./routers/sales_router')
require('./db/mongoose')
require('./db/mongodb')

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(express.json())
app.use(mflix_router)
app.use(airbnb_router)
app.use(training_router)
app.use(supplies_router)

app.listen(port, ()=>{
    console.log('Server is up on port 3000')
})
