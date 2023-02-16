const express=require('express')
const bcrypt=require('bcrypt');
const User = require('../../model/Users/UserModel');

const SignupRouter=express.Router()


SignupRouter.post('/',async(req,res)=>{
    const {username,email,password}=req.body;

    bcrypt.hash(password,8,async(err,hash)=>{
        if(err){
            res.send({err,msg:"Something Went Wrong"})
        }
        
        const signup=new User({username,email,password:hash})
        await signup.save()
        res.status(201).send({signup,msg:"Register Successfully"})

    })

})


module.exports=SignupRouter