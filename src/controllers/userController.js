const { registerUser } = require("../services/userService")

async function createUser(req,res){
    try{
        const response = await registerUser(req.body)
        return res.json({
            success:true,
            message:"user registered successfully",
            data:{response},
            error:{}
        })
    }catch(err){
        return res.json({
            success:false,
            message:err.message,
            data:{},
            error:err
        })
    }
}
module.exports = {
    createUser
}