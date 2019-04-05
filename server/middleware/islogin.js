const jwt = require('jsonwebtoken')
module.exports = { isLogin : function(req,res,next){
    try{
        // console.log(localStorage,'ini lioadosa')
        const decoded = jwt.verify(req.headers.token,process.env.JWT_SECRET )
        req.decoded = decoded
        
        next()
    }catch (err){
        res.status(400).json({msg:'authetication failed'})
    } 

    console.log(localStorage.token)
}}