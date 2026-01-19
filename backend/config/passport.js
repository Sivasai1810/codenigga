import dotenv from 'dotenv'
dotenv.config()
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20"
import user from "../schema/users";
GoogleStrategy.Strategy

passport.use(
    new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
            callbackURL:"/auth/google/callback",
        },
            async(accessToken,refreshToken,profile,done)=>{
                let newuser=user.findOne({email:profile.emails[0].value})
                if(!newuser){
                  newuser=await user.create({
                    username:profile.displayName,
                    email:profile.emails[0].value,
                    googleId:profile.id
                    })
                }
                done(null,newuser)
            }
        
    )
)
