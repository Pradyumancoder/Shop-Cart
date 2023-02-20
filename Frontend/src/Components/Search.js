import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { ContextApi } from '../Context/Context'

export const Search = () => {
    const{state,ProductDetails}=useContext(ContextApi)
    const navigate=useNavigate()

    const handleClick=(el)=>{
        console.log(el)
        ProductDetails(el._id)
        navigate(`/products/category/productsdetails/${el._id}`);

    }

  return (
    <div className='flex flex-col gap-3 cursor-pointer'>
        {
         state.data[0] &&  state.data.map((el,i)=>{
                return(
                    <div onClick={()=>handleClick(el)} className='flex items-center gap-3' key={i}>
                        <img className='w-[50px]' src={el.images} alt={el.images} />
                         <p className='text-sm'>{el.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
