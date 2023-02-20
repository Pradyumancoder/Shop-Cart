import React from 'react'
import { MdAdd, MdDelete,MdRemove  } from 'react-icons/md'
import {GoX} from 'react-icons/go'
import Rating from './Rating'


export const CartAndWishlist = ({val,handleRemove,IncrementQty,gif,type,DecrementQty}) => {

  
 
  

  return (
    <div  className='  overflow-y-scroll lg:h-[570px] mt-5  pl-2 '>
            {val[0]?val.map((el)=>{
        return(
            <div key={el._id} className="flex  gap-4  border min-w-[366px] ">
            <div className="p-2">
              <img className="lg:w-[130px]    " src={el.images} alt="" />
            </div>
            <div className="">
              <div className="flex justify-between pt-2 ">
                <h3 className="font-semibold lg:w-[450px]">{el.name}</h3>
                <GoX className="cursor-pointer w-[100px] " onClick={()=>handleRemove(el)} size={25} />
              </div>
              <div className="pt-3">
                <h4 className="font-semibold text-blue-500">₹{el.price}</h4>
              </div>
              <div className='flex'>
                <Rating value={el.rating}/>
              </div>
              <div className="flex items-center gap-3 pt-3 py-3">
                <div onClick={()=>IncrementQty(el)} className="bg-slate-900 text-white cursor-pointer ">
                  <MdAdd size={25} />
                </div>
                <h3 className="text-xl">{el.qty}</h3>
                <button onClick={()=>DecrementQty(el)} disabled={el.qty==1}  className="bg-slate-900 text-white cursor-pointer">
                  <MdRemove  size={25} />
                </button>
              </div>
            </div>
          </div>
        )
    }):<div className="flex  justify-center ">
    <div>
    <div >
     <img className="w-[500px]" src={gif}/>
     </div>
     
      <h1 className=" text-lg font-semibold bg-slate-200 text-center" >Your {type} is Empty</h1>
      
    </div>
      </div>}
    
    </div>
  )
}
