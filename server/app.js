require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const router = require('./routes')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/todolist'
mongoose.connect(url, { useNewUrlParser: true })


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',router)








app.listen(port,()=>{
    console.log(`working on ${port}`)
})