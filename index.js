const express = require('express');
const serverConfig = require('./src/config/serverConfig');
const connectDb = require('./src/config/dbConfig');
const userRouter = require('./src/routes/userRoute');

const app = express();
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRouter)

app.listen(serverConfig.PORT,async ()=>{
   await connectDb()
    console.log(`server got started on port ${serverConfig.PORT}`)
})