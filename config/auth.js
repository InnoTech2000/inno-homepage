export function isUser(req,res,next){
    if(req.isAuthenticated()){
        next();
    } else {

    }
}

export function isAdmin(req,res,next){
    if(req.isAuthenticated() && res.locals.user.admin ==1) {
        next();
    }else{
        req.flash('danger','Please log in as admin.')
        res.redirect('/');
    }
}