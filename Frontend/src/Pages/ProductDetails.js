import React, { useContext } from 'react'
import { ContextApi } from '../Context/Context'
import Rating from '../Components/Rating'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useState } from 'react';


export const ProductDetails = () => {
   const {state,AddtoCart}=useContext(ContextApi)

   const navigate=useNavigate()

   const [click,setClick]=useState(false)


   const handleCart=(val)=>{
    if(!click){
      AddtoCart(val)
      toast.success("Item Added To Cart")
    }
    else{
      toast.error("Item Already Added to Cart")
    }
    setClick(true)
   
   }

   const handleBuy=(val)=>{
  if(!click){
    AddtoCart(val)
    
  }
  navigate('/cart')
    setClick(true)
   }


  return (
    <div className='flex flex-col md:flex-row  mt-4 gap-10 justify-center items-center border md:py-3 p-10 '>
       <div className='rounded-xl px-5 py-5 bg-[#edeff0]' >
        <img className=' hover:scale-110 ease-in duration-300 rounded-2xl cursor-pointer  ' src={state.data.images} alt={state.data.images} />
       </div>
       <div className='flex flex-col gap-3'>
            <div className='flex gap-4 items-center'>
            <span className='text-sm font-semibold'>Category</span>
            <p    className='text-sm font-semibold'>{state.data.category}</p>
            </div>
            <h3 className='font-semibold  md:text-2xl md:w-[400px]'>{state.data.name}</h3>
           
            <div className='flex gap-4'>
             <span className='text-lg font-semibold'>Price</span>
                <p className='text-red-600 font-semibold text-xl'>₹{state.data.price}</p>
                <p className=' text-gray-600 line-through'>₹{state.data.original_price}</p>
                
            </div>
            <div className='flex gap-5 items-center'>
            <span className='text-lg font-semibold mt-2'>Rating</span>
            <Rating value={state.data.rating}/>
            </div>
            <div className='flex gap-3'>
                <button  onClick={()=>handleBuy(state.data)}  className="bg-red-500 py-2 px-3 w-[150px] font-semibold  text-white  rounded-2xl hover:transition-all ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300">Buy</button>
                <button onClick={()=>handleCart(state.data)} className='bg-red-500 py-2 px-2 w-[150px] font-semibold  text-white rounded-2xl hover:transition-all ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300'>Add to Cart</button>
                <Toaster/>
            </div>
            <div className='w-[300px]'>
                <h4 className='text-lg font-semibold'>Description</h4>
                <p>{state.data.details}</p>
            </div>

         

       </div>
    </div>
  )
}
