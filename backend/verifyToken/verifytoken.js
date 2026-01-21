import dotenv from 'dotenv'
dotenv.config();
import jwt from "jsonwebtoken"

const verifyToken =async(req,res,next)=>{
const IncommingaccessToken=req.cookies.accesToken
const IncommingrefreshToken=req.cookies.refreshToken
let decoded;
if(IncommingaccessToken){
    decoded= jwt.verify(IncommingaccessToken,process.env.JWT_SECRET)
    req.user=decoded
   next()
}
if(!IncommingrefreshToken){
res.status(400).json({
    success:false,
    message:"Login again Token is missing"
})}
const playload={
userID:decoded.userID,
email:decoded.email
}
 const accessToken=jwt.sign(playload,process.env.JWT_SECRET)
 res.cookies("accessToken",accessToken,{
     httpOnly:true,
     secure:false,
     sameSite: "strict",
     maxAge:7*24*60*60*1000
 })
}

export default verifyToken