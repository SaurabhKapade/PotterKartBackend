const { loginUser } = require("../services/authService")

async function login(req,res){
    try{
        const loginPayload = req.body
        console.log(loginPayload)
        const response = await loginUser(loginPayload)
        res.cookie('authToken',response,{
            httpOnly:true,
            secure:false,
            maxAge:1*24*60*60*1000
        })

        return res.status(200).json({
            success:true,
            message:'User LoggedIn successfully',
            data:response,
            error:{},
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
            data:{},
            error:err,
        })
    }
}
module.exports = {
    login
}