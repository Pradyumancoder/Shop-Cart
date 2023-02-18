import React from 'react'
import { useContext } from 'react'
import { CartAndWishlist } from '../Components/CartAndWishlist'
import { ContextApi } from '../Context/Context'

export const Wishlist = () => {

    const {state,RemoveItemwishlist}=useContext(ContextApi)

    const handleRemove=(val)=>{
      RemoveItemwishlist(val)
    }

     

  return (
    <div>
      <h1 className='text-xl font-semibold  underline underline-offset-8 decoration-4 ml-5 decoration-amber-600'>My Wishlist ({state.wishlist.length})</h1>
        <CartAndWishlist val={state.wishlist} handleRemove={handleRemove} gif={'https://cdn.dribbble.com/users/530801/screenshots/2357094/media/25eb03edc630085133b718904cccbb40.gif'} type={'Wishlist'} />
    </div>
  )
}
