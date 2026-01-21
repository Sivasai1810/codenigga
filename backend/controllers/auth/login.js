import dotenv from 'dotenv'
dotenv.config()
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import user from "../../schema/users.js";

 export const login =async(req,res)=>{
    try{
       const {userEmail , password}=req.body
       if(!userEmail || !password){
        return  res.status(400).json({
        success:false,
        message:"missing felids are required"
        })
       
       }
       const userExisting =await  user.findOne({ email :userEmail })
     if(!userExisting){
       return  res.status(401).json({
            message:"Email not found"
        })
     }
     const isPasswordMatch= await bcrypt.compare(password,userExisting.password)
     if(!isPasswordMatch){
       return  res.status(400).json({
            success:false,
            message:"invalid credentials"
        })
     }
     const playload={
      userID:userExisting.userID,
      email:userEmail
     }
     const accessToken=jwt.sign(playload,process.env.JWT_SECRET)
     const refreshToken=jwt.sign(playload,process.env.JWT_SECRET)
     res.cookie("accessToken",accessToken,{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
      maxAge:7*24*60*60*1000
     })
      res.cookie("refreshToken",refreshToken,{
      httpOnly:true,
      secure:false,
      sameSite:"strict",
      maxAge:7*24*60*60*1000
     })

       return res.status(200).json({
        message:"Loggin successfully completed"
     })

    }catch(error){
        console.log(`Error from the login controller ${error}`)
          res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }

}
