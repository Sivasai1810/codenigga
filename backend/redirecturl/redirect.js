import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import passport from "passport"
import jwt from "jsonwebtoken"
const router=express.Router()
router.get(
    "/google",
    passport.authenticate("google",{scope:["profile","email"],session:false})
)
router.get(
    "/google/callback",
    passport.authenticate("google",{session:false}),
  
 async(req,res)=>{
    const token =jwt.sign(
        {id:req.user._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}
    )
    res.redirect(`http://localhost:5173/dashboard?token=${token}`)
 }
)
export default router

