import Area from '../Models/Area.js';

const arr = [];

export const GetHome = (req,res) => {
    res.render('home')
}

export const GetAuth = (req,res) => {
    res.render('Auth')
}

export const GetBase = (req,res) => {
    res.render('Base')
}



