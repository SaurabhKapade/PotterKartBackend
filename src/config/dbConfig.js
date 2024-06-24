const mongoose = require('mongoose')
const serverConfig = require('./serverConfig')

async function connectDb(){
    try{
        await mongoose.connect(serverConfig.DB_URL)
        console.log('connected to database')
    }catch(err){
        console.log('cant connect to mongodb server')
        console.log(err)
    }
}

module.exports = connectDb