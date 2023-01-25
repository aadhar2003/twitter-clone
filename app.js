const express=require('express');
const app=express();
const PORT=4444;
const hbs=require('hbs');
const path=require('path');
const methodOverride=require('method-override');
const {mongoConnect} =require('./databases/database');

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));  

hbs.registerPartials(__dirname + '/views/partials');
const home=require('./routes/home');
app.use('/home',home);

const logIn=require('./routes/logIn');
app.use('/logIn',logIn);

const mainHandler=require('./routes/SignUp');
app.use('/',mainHandler);

mongoConnect().then(()=>{
    console.log("database connected");
    app.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`);
    })
})

