const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const User = require('../../model/Users/UserModel');

const LoginRouter=express.Router()


LoginRouter.post('/',async(req,res)=>{
    const {email,password}=req.body;

   try{
    const user=await User.findOne({email})
    if(!user){
        
        res.send({msg:"Please Enter Correct Email"})
        return false;
    }
    const hash=user?.password;

    bcrypt.compare(password,hash,async(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            const token=jwt.sign({userId:user._id},'HEMANT123')
            res.send({msg:"Loggin Success",token,user})
        }
        else{
            res.send({msg:"Wrong Password"})
        }
    })
   }
   catch(err){
        console.log(err)
        return false;
   }

    

})



module.exports=LoginRouter