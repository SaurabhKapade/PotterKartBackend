const dotenv = require('dotenv')
dotenv.config()
module.exports ={
    PORT:process.env.Port,
    DB_URL:process.env.DB_URL,
    JWT_SECRET:process.env.JWT_SECRET
}