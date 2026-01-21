import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Authrouter from "./Routes/auth.routes.js"
import connectDB from './config/db.js'
import passport from './config/passport.js'
const app=express();
connectDB()
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize());
const allowedorigins=[  
    'http://localhost:5173'
]
app.use(cors({
    origin:(origin,callback)=>{
        if(!origin) return callback(null,true)
        if(allowedorigins.includes(origin)){
            return callback(null,true)
        }else{
             callback(new Error("not allowed by the cors"),false)
        }
    },
    credentials:true
}))
app.use("/auth",Authrouter)
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server has been started ${port}`)
})