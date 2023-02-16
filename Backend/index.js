const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const connection = require('./config/db')
const SignupRouter = require('./routers/UsersRouter/Signup')
const LoginRouter = require('./routers/UsersRouter/Login')
const ProductRouter = require('./routers/ProductsRouter/Products')
const Products = require('./model/Products/ProductsModel')
dotenv.config()


const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())


app.use('/signup',SignupRouter)
app.use('/login',LoginRouter)
app.use('/products',ProductRouter)

// app.get("/search",async(req,res)=>{
//     try{
  
//     const {name}=req.query
//     // console.log(name)
  
//     const agg=[
//         {
//             $search:{
//                 autocomplete:{
//                     query:name,
//                     path:"name",
                    
//                 }
//             }
           
//         },
//         {
//             $limit:5
//         }
     
//     ]
//   const response= await Products.aggregate(agg)
  
//   return res.status(200).json(response)
  
    
//     }
//     catch(err){
//   return res.json([])
//     }
//   })

const PORT=process.env.PORT||8080;


connection.then(()=>{
    
app.listen(PORT,()=>{console.log('server started on port 8080')})
})