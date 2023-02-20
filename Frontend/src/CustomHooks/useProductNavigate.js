import React, { useContext, useEffect } from 'react'

import { useNavigate } from 'react-router'
import { ContextApi } from '../Context/Context'

const useProductNavigate = () => {
    const {handleFilter}=useContext(ContextApi)

    const navigate=useNavigate()
    
     const handleClick=(val)=>{
        if(val){
            handleFilter(val)
            navigate(`/products/category/${val}`)
        }
    }

   
    
    return {handleClick}
}

export default useProductNavigate