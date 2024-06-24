const user = require('../schema/userSchema')

async function findUser(userDetails){
   
    try{
        console.log("hellow from findUser")
        const response = await user.findOne({...userDetails});
        return response;
    }catch(err){
        console.log(err);
    }
}

async function createUser(userDetails){
    try{
        const response = await user.create({...userDetails})
        return response
    }catch(err){
        console.log(err)
    }
}
module.exports = {
    findUser,
    createUser
}