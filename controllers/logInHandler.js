
const { getDb } = require("../databases/database");


module.exports.getlog=(req,res,next)=>{
    res.render('logIn');
}
module.exports.postLog=(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    const db=getDb();
    const user=db.collection('users').find({
        username: username,
        password:password
    })
    console.log(user.username);
    if(user.username===username){
        res.redirect('/home');
    }
    else{
        res.redirect('/logIn');
    }
}