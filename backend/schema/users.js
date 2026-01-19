import mongoose from "mongoose";

const userschema  = new mongoose.Schema(
    {
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
        googleId
        
    },
    {timestamps:true}
)

const user=mongoose.model("user",userschema)

export default user