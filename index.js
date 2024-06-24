const express = require('express');
const cookieparser = require('cookie-parser')
const serverConfig = require('./src/config/serverConfig');
const connectDb = require('./src/config/dbConfig');
const userRouter = require('./src/routes/userRoute');
const { isLoggedIn } = require('./src/validations/authValidator');
const { authRouter } = require('./src/routes/authRouter');

const app = express();
app.use(cookieparser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRouter)
app.use('/auth',authRouter);

app.listen(serverConfig.PORT,async ()=>{
   await connectDb()
    console.log(`server got started on port ${serverConfig.PORT}`)
})

app.get('/ping',isLoggedIn,(req,res)=>{
    return res.json({
        message:'pong'
    })
})