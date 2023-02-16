const { Schema, model } =require('mongoose')


const UserModel=new Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})


const User=new model('usermodel',UserModel)


module.exports=User