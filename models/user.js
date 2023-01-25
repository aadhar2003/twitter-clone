const mongodb=require('mongodb');
const { getDb } = require('../databases/database');

class user{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }

    save(){
        const db=getDb();
        return db.collection('users').insertOne(this).then((data)=>{
            console.log(data);
        }).catch(err=>console.log(err));
    }
   

}
module.exports=user;