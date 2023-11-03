import express from 'express';
import Auth from '../Models/Auth.js';
import bcrypt from 'bcryptjs';
import passport from 'passport';


export const GetLogin = (req,res) => {
    res.render('login')
}

export const GetRegister = (req,res) => {
    res.render('register')
}

export const Logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){return next(err);}
        res.redirect('/')
    });
    
}


export const PostLogin = (req,res,next) => {
    passport.authenticate('local',{
        successRedirect: '/home',
        failureRedirect: '/user/login',
        failureFlash:true

    })(req,res,next)
}

export const PostRegister = async (req,res) => {
    const { username , password} = req.body;
    const hash =await bcrypt.hashSync(password , bcrypt.genSaltSync(10));
    const newUser = new Auth({

        username: username,
        password: hash
    })

try {
    const saveUser =await newUser.save();
    console.log(saveUser)
    res.redirect('/auth/login')
    // res.status(200).json(saveUser );
} catch (error) {
    res.status(404).json(error)
}

}