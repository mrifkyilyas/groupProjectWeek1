const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todo-list', { useNewUrlParser: true})


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',router)



app.listen(port,()=>{
    console.log(`working on ${port}`)
})