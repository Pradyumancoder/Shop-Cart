import React, { useContext, useEffect } from 'react'

import Topitems from '../Components/TopItems'
import { Deals } from '../Components/Deals'
import { ContextApi } from '../Context/Context'
import { TopDeals } from '../Components/TopDeals'
import { TopDeal } from '../assert/carouselData/TopDeal'
import { MobilesDeals } from '../assert/carouselData/MobilesDeals'

export const Home = () => {
    const {state,handleFilter}=useContext(ContextApi);


  

      
  return (
    <div>
      <Topitems/>

      <TopDeals val={TopDeal} show={1} />
      <div className='flex flex-col gap-10'>
  
      <Deals heading={"Grocery"} all={"View all"} name={'grocery'} />
      <Deals heading={"Fashion"} all={"View all"}  name={'fashion'}/>
    </div>
     
     <TopDeals val={MobilesDeals} show={2} />
     <Deals heading={"Mobiles Deals"} all={"View all"}  name={'mobiles'}/>
     <Deals heading={"Laptops Offers"} all={"View all"} name={'laptop'}/>

   
    
      
    </div>
  )
}
