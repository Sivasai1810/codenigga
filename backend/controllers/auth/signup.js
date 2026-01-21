import user from "../../schema/users.js";
import bcrypt from "bcrypt"

export const signup=async(req,res)=>{
const {userEmail,password,userName}=req.body
if(!userEmail,!password){
    res.status(400).json({
        success:false,
        message:"Input Fields are required"
    })
}
console.log(req.body)
const userExisting=await user.findOne({ email:userEmail })
if(userExisting){
    res.status(200).json({
        success:false,
        message:"User Already exists"
    })
}
const saltRounds=10
const hassedpassword= await bcrypt.hash(password,saltRounds)
const newuser= await user.create({
    userID:Math.random().toString(36).substring(2, 10),
    username:userName,
    email:userEmail,
    password:hassedpassword
})
res.status(200).json({
    success:true,
    message:"Account created successfully"
})

}