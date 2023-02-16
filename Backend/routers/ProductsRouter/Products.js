const express=require('express')
const Products = require('../../model/Products/ProductsModel')


const ProductRouter=express.Router()

//get All Products

ProductRouter.get('/',async(req,res)=>{
   
    const data= await Products.find();

    return  res.send(data)
})

//Post ALL Products


ProductRouter.post('/',async(req,res)=>{
  const {images,name,details,rating,price,original_price,category}=req.body;
  const data=new Products({images,name,details,rating,price,original_price,category})
  await data.save()
 return res.send(data)
})


//get All Products By category

ProductRouter.get('/category',async(req,res)=>{

  try{
    const {category}=req.query
const data= await Products.find({category:category})

 return res.send(data)
  }
  catch(e){
  return  res.send(e)
  }


})


ProductRouter.get('/category/productsdetails/:id',async(req,res)=>{
  try{
    const {id}=req.params
   let data=await Products.findOne({_id:id})

   return res.status(201).send(data)


  }
  catch(e){
     res.status(401).send(e)
  }
})


ProductRouter.get('/search',async(req,res)=>{
 
  try{
    const {q}=req.query;
    let data= await Products.find({
      name:{$regex:q,$options:"i"}
    })

    return res.send(data)

  }
  catch(e){
    return res.sendStatus(401)
  }
})



module.exports=ProductRouter;
