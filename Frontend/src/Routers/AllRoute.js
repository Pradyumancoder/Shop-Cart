import React from 'react'
import { Route, Routes } from 'react-router'
import { DarkMode } from '../Components/DarkMode'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Private } from '../Context/Private'
import { Cart } from '../Pages/Cart'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { ProductDetails } from '../Pages/ProductDetails'
import { Products } from '../Pages/Products'
import { Signup } from '../Pages/Signup'
import { Wishlist } from '../Pages/Wishlist'

export const AllRoute = () => {
  return (
    <div>
        <div>
            <Navbar/>
            {/* <DarkMode/> */}
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products/category/:id'element={<Products/>}/>
            <Route path='/products/category/productsdetails/:id' element={<ProductDetails/>}/>
            <Route path='/wishlist' element={<Private><Wishlist/></Private>}/>
            <Route path='/cart' element={<Private><Cart/></Private>}/>
        </Routes>
        <div className='pt-10'>
          <Footer/>
        </div>
    </div>
  )
}
