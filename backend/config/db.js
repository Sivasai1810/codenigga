import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const connectDB=async()=>{
    try{
const conn=await mongoose.connect(process.env.MONGODB_URL)
console.log("mongoose is conntected successfully")
    }catch(error){
        console.log("unable to connect the db",error)
    }
}

export default connectDB