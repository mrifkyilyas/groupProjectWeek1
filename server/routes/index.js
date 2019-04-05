const express = require('express')
const router =  express.Router()
const taskRouter = require('./task.js')
const { getIndex  } = require('../controllers')


router.use('/task', taskRouter)
router.get('/',getIndex)

module.exports = router