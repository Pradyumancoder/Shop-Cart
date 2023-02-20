import React, { useContext } from 'react'
import mobile from '../assert/TopItems/mobile.png'
import laptop from '../assert/TopItems/laptop.png'
import furniture from '../assert/TopItems/far.png'
import fashion from '../assert/TopItems/fashion.png'
import grocery from '../assert/TopItems/grocery.png'
import { ContextApi } from '../Context/Context'
import useProductNavigate from '../CustomHooks/useProductNavigate'

const TopItems = () => {
  const {state}=useContext(ContextApi)

  const {handleClick}=useProductNavigate()

  

  
  return (
    <div className='flex justify-evenly gap-2 lg:justify-center  items-center mt-5 text-center mb-5  w-[395px] md:w-full   '>
        <div onClick={()=>handleClick('mobiles')} className='hover:scale-110 border  px-2 py-1 cursor-pointer  transition-all ease-in-out duration-100  hover:bg-red-500 rounded-xl hover:text-white  '>
            <img className='h-[50px]' src={mobile} alt="mobile" />
           <h4>Mobile</h4>
        </div>
        <div onClick={()=>handleClick('laptop')} className='hover:scale-110 border  px-2 py-1 cursor-pointer  transition-all ease-in-out duration-100  hover:bg-red-500 rounded-xl hover:text-white'>
            <img className='h-[50px]' src={laptop} alt="laptop" />
           <h4>Laptop</h4>
        </div>
        <div onClick={()=>handleClick('fashion')} className='hover:scale-110 border  px-2 py-1 cursor-pointer  transition-all ease-in-out duration-100  hover:bg-red-500 rounded-xl hover:text-white'>
            <img className='h-[50px] pl-1' src={fashion} alt="fashion" />
           <h4>Fashion</h4>
        </div>
        <div  onClick={()=>handleClick('grocery')}className='hover:scale-110 border  px-2 py-1 cursor-pointer  transition-all ease-in-out duration-100  hover:bg-red-500 rounded-xl hover:text-white'>
            <img className='h-[50px] pl-1' src={grocery} alt="grocery" />
           <h4>Grocery</h4>
        </div>
        <div onClick={()=>handleClick('home')} className='hover:scale-110 border  px-2 py-1 cursor-pointer  transition-all ease-in-out duration-100  hover:bg-red-500 rounded-xl hover:text-white'>
           <img className='h-[50px] ' src={furniture} alt="furniture" />
           <h4>Home</h4>
        </div>
    </div>
  )
}

export default TopItems