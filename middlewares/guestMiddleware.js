const guestMiddleware = (req, res, next)=>{
    if (req.session.userLogin) {
        return res.redirect('/user/profile')
        
    }else{
        next();
    }
}

module.exports = guestMiddleware;