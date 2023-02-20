import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContex'
import { ContextApi } from '../Context/Context'

export const Checkout = () => {
    const {state}=useContext(ContextApi)

    const {Auth}=useContext(AuthContext)

 console.log(Auth)




   let sum=0;
   for(let i=0;i<state.cartData.length;i++){
    sum+=state.cartData[i].totalprice
   }
 
   

  return (
    <div className='md:mt-10 md:mr-10 relative md:static' >
        <h2 className=' hidden md:block text-center bg-red-500 py-2 rounded text-white '>Price Details</h2>
     <div className='fixed bottom-0 left-0 right-0 md:static'>
      
     <div className='md:w-[400px] border px-3 md:h-[300px] bg-white  flex flex-col gap-4 '>
       <div className='  flex justify-between   '>
        <p>Cart items</p>
        <span>{state.cartData.length}</span>
        </div>
        <div className='flex justify-between   '>
        <p>Delivery Charges</p>
        <span>0</span>
        </div>
        <div className='flex justify-between text-lg font-semibold'>
            <h3>Total</h3>
            <p>{sum}</p>
        </div>
       </div>
       <button className='bg-slate-600 text-white w-full  md:w-[400px] py-2 hover:transition-all ease-in-out delay-150 hover:scale-105 hover:translate-x-0 hover:bg-indigo-500 duration-300'>Place Order</button>

     
     </div>
  
    </div>
  )
}
