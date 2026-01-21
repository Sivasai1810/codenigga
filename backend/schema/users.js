import mongoose from "mongoose";

const userschema  = new mongoose.Schema(
    {
         userID:{
            type:String,
            required:true,
            unique:true
         },

        username:{
            type:String
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
        },
        googleId:{
            type:String
        }
        
    },
    {timestamps:true}
)

const user=mongoose.model("user",userschema)

export default user