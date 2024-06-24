const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/serverConfig')
async function isLoggedIn(req,res,next){
    const Token = req.cookies['authToken']
    if(!Token){
        return res.json({
            success:false,
            data:{},
            message:'No auth Token provided',
            error:'Not authenticated'
        })
    }

    const decoded = jwt.verify(Token,JWT_SECRET)
    if(!decoded){
        return res.json({
            success:false,
            data:{},
            message:'Invalid Token provided',
            error:'Not authenticated'
        })
    }

    req.user = {
        email:decoded.email,
        id:decoded.id
    }
    next();
}

module.exports = {
    isLoggedIn
}