const express = require('express')
const router =  express.Router()
const { getIndex,googleLogin  } = require('../controllers')
const {isLogin} = require('../middleware/islogin')

router.post('/google-login',googleLogin)
router.get('/index',isLogin, getIndex)
// router.use('/',isLogin)






module.exports = router