import React from "react";
import { Logo } from "./Logo";
import { MdLogout, MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ContextApi } from "../Context/Context";
import { BsCart2, BsCart3, BsHeart } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { Search } from "./Search";
import { AuthContext } from "../Context/AuthContex";
import { AiOutlineUser } from "react-icons/ai";


export const Navbar = () => {
  const navigate = useNavigate();
  const { state, handleSearch } = useContext(ContextApi);

  const {Auth,Name,handleLogout}=useContext(AuthContext)


  const [search, Setsearch] = useState("");

  const [searchres,Setsearchres]=useState(false)



  useEffect(() => {
    let timeId = setTimeout(() => {
      
      if(search){
        Setsearchres(true)
        handleSearch(search);
      }
      else{
        Setsearchres(false)
      }
    }, 1000);
   
  }, [search]);


  const handleLogin=()=>{
    navigate('/login')

  }



  let username=JSON.parse(localStorage.getItem('username'))

  const Logout=()=>{
    localStorage.removeItem('token')
    handleLogout()
    
  }

 

 

  return (
    <div>
      <div className="flex items-center  justify-between  shadow-lg rounded shadow-cyan-500/5 border-gray-400  ">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <Logo/>
       
        </div>
        <div className="relative  w-full max-w-md hidden lg:block ">
          <input
            className="  rounded w-full p-1 bg-slate-100 border outline-none hover:bg-white"
            value={search}
            onChange={(e) => Setsearch(e.target.value)}
            type="text"
            placeholder="Search For Products"
          />
          {searchres && (
            <div onClick={()=>Setsearchres(false)} className={'absolute shadow-md  p-3 right-0 left-0 w-full z-50 bottom-0 bg-white  h-fit    rounded  top-[34px]'}>
              <div className="overflow-scroll h-96">
                <Search/>
              </div>
            </div>
          )}
        </div>
        <div className="flex  items-center">
       {Auth.isAuth?<div className="flex gap-3 items-center">
        <div className="flex gap-1">
        <AiOutlineUser size={25}/>
        <p>{Name.username}</p>
        </div>
        <div className="rounded-sm cursor-pointer hover:bg-violet-100 hover:scale-110" onClick={Logout}>
          <MdLogout size={25}/>
        </div>
       </div>:<button onClick={handleLogin} className="bg-white p-2 cursor-pointer rounded-sm hover:bg-violet-100 hover:scale-110  ">
            Login
          </button>}
          <div
            onClick={() => navigate("/cart")}
            className="flex ml-3 cursor-pointer"
          >
            <BsCart3 size={25} />
            <p className="relative bottom-2 right-2   px-2   ">
              {state.cartData.length}
            </p>
          </div>
          <div
            onClick={() => navigate("/wishlist")}
            className="flex  cursor-pointer"
          >
            <BsHeart size={24} />
            <p className="relative bottom-3   px-1   ">
              {state.wishlist.length}
            </p>
          </div>
        </div>
      </div>
   
    </div>
  );
};
