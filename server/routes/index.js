const express = require('express')
const router =  express.Router()
const taskRouter = require('./task.js')
const { getIndex,googleLogin  } = require('../controllers')
const {isLogin} = require('../middleware/islogin')

router.post('/google-login',googleLogin)
router.get('/index',isLogin, getIndex)
// router.use('/',isLogin)





router.use('/task', taskRouter)
router.get('/',getIndex)

module.exports = router