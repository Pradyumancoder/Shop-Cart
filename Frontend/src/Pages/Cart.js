import React from "react";
import { useContext } from "react";
import { CartAndWishlist } from "../Components/CartAndWishlist";
import { Checkout } from "../Components/Checkout";
import { ContextApi } from "../Context/Context";

export const Cart = () => {
  const { state,RemoveItem,IncrementQty,DecrementQty } = useContext(ContextApi);


  

let className='flex flex-col md:flex-row place-content-between  '


  
    if(state.cartData.length===0){
      className=''
    }
   

  
  


 



  const handleRemove=(val)=>{
    RemoveItem(val)
  }

  return (
   <div className={className}  >
   <div className="" >
   <h1 className='text-xl font-semibold   underline underline-offset-8 decoration-4 ml-5 decoration-amber-600'>Your Cart ({state.cartData.length})</h1>
    <CartAndWishlist val={state.cartData} IncrementQty={IncrementQty} DecrementQty={DecrementQty} handleRemove={handleRemove} gif={"https://restaurant-e-commerce-website-m2yp.vercel.app/static/media/empty-red.5309741357a4288595a9.gif"} type={'Cart'}/>
   </div>
   <div >{state.cartData.length!==0&& <Checkout/>}</div>
   </div>
  );
};
