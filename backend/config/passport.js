import dotenv from 'dotenv'
dotenv.config()
import passport from "passport";
import {  Strategy as GoogleStrategy }from "passport-google-oauth20"
import user from "../schema/users.js";
GoogleStrategy.Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
            callbackURL:"/auth/google/callback",
        },
            async(accessToken,refreshToken,profile,done)=>{
                try{
                let exisitingUser= await user.findOne({email:profile.emails[0].value})
                if(!exisitingUser){
                  exisitingUser=await user.create({
                    username:profile.displayName,
                    email:profile.emails[0].value,
                    googleId:profile.id
                    })
                }
                done(null,exisitingUser)
            }catch(err){
                console.log(`error fron redirecturl ${err}`)
            }
            }
        
    )
)

export default passport