import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDB from './config/db'
const app=express();
connectDB()
app.use(express.json())
app.use(cookieParser())
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

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server has been started ${port}`)

})