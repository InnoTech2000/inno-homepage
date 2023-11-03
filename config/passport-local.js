import {Strategy as LocalStrategy} from 'passport-local';
import passport from "passport";
import bcrypt from 'bcryptjs';
import Auth from "../Models/Auth.js";

export default function(passport){

    passport.use(new LocalStrategy(function(username , password , done){

        Auth.findOne({username: username},function(err,user){

            if(err) console.log(err);

            if(!user) {
                return done(null . false, {message:'No user found!'})
            }
            bcrypt.compare(password, user.password,function(err,isMatch){
                if(err)
                console.log(err);

                if(isMatch){
                    return done(null, user);
                }  else {
                    return done(null, false,{message:'Wrong password.'})
                }
            })
        })
    }))

}

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    Auth.findById(id,function(err,user){
        done(err ,user);
    })
})