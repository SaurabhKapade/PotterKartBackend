const { findUser, createUser } = require("../repositories/userRepository")

async function registerUser(userDetails){

    const user = await findUser({
        email:userDetails.email,
        password:userDetails.password
    })
    if(user){
        throw {
            reason:"user with given email and password already exists",
            statusCode:400
        };
    }

    const newUser = await createUser({
        email: userDetails.email,
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        mobileNumber: userDetails.mobileNumber,
        role:userDetails.role
    })

    if(!newUser){
        throw{
            reason:"cannot create User",
            statusCode:500
        }
    }
    return newUser
}
module.exports = {
    registerUser
}