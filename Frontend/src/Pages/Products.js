import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { SingleProduct } from '../Components/SingleProduct'
import { ContextApi } from '../Context/Context'

export const Products = () => {
    const {id}=useParams()
    const {state,handleFilter}=useContext(ContextApi)



    console.log(id)

    useEffect(()=>{
        handleFilter(id)
    },[])
   
  

  return (
    <div className='grid grid-cols-2  lg:grid-cols-4 gap-1 cursor-pointer'>
        {state.data[0] ? state.data.map((el,i)=><div key={el._id}><SingleProduct  el={el} i={i}/></div>):<p>loading..</p>}
    </div>
  )
}


