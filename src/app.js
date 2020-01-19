const express = require('express')
const mflix_router = require('./routers/mflix_router')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(mflix_router)

app.listen(port, ()=>{
    console.log('Server is up on port 3000')
})
