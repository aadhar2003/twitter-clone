const user = require("../models/user");

module.exports.getLog=(req,res,next)=>{
    res.render('SignUp');
}
module.exports.postLog=(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;
    let newUser=new user(username,password);
    newUser.save().then((data)=>{
        console.log(data)
        res.redirect('/logIn');
    }).catch(err=>console.log(err));
}