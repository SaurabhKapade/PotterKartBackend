const express = require('express')
const jwt = require('jsonwebtoken')
const { findUser } = require('../repositories/userRepository')
const bcrypt = require('bcrypt')
const { JWT_SECRET } = require('../config/serverConfig')
async function loginUser(userDetails){
    const email = userDetails.email
    const plainPassword = userDetails.password

    const user = await findUser({email})
    if(!user){
        throw{message:'No user found with given email ', statusCode:400}
    }

    const isPasswordValidate = bcrypt.compare(plainPassword , user.password)
    if(!isPasswordValidate){
        throw{message:'Invalid password please try again', statusCode:400}
    }

    const Token = jwt.sign({email:user.email , id:user._id},JWT_SECRET,{expiresIn:'1d'})
    return Token;
}
module.exports = {
    loginUser
}