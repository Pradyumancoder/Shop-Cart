const { Schema, model } = require("mongoose");


const ProductModel=new Schema({
    images:{type:String},
    name:{type:String},
    details:{type:String},
    rating:{type:Number},
    price:{type:Number},
    original_price:{type:Number},
    category:{type:String}

})




const Products=new model('Products',ProductModel)

module.exports=Products;