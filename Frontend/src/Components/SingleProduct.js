import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../Context/Context";
import Rating from "./Rating";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router";
import { ProductDetails } from "../Pages/ProductDetails";
import toast, { Toaster } from "react-hot-toast";

export const SingleProduct = ({ el, i }) => {
  const { ProductDetails, Wishlist, RemoveItemwishlist,AddtoCart ,loading} =
    useContext(ContextApi);

 

  const [newName, setnewName] = useState(el.name);

  const [wishlist, setWishlist] = useState(false);

  const [hover,setHover]=useState(false)

  const [click,setClick]=useState(false)




  const navigate = useNavigate();

  useEffect(() => {
    if (newName.length > 30) {
      setnewName(newName.slice(0, 30) + "...");
    }
  }, []);

  const handleClick = (el) => {
    if (wishlist) {
      RemoveItemwishlist(el);
      toast("Remove From Wishlist", {
        icon: "💔",
      });
    } else {
      Wishlist(el);
      toast("Added to your Wishlist", {
        icon: "❤️",
      });
    }
    setWishlist(!wishlist);
  };


  const handleAddtoCart=(val)=>{
    if(!click){
      AddtoCart(val)
      toast.success(" Item Added to your Cart")
    }
    else{
      toast.error('Item Already Added to Cart')
    }
    setClick(true)
   
   
  }


 

  const handleData = (val) => {
  
    if (val) {
      ProductDetails(val._id);
      navigate(`/products/category/productsdetails/${val._id}`);
    }
  };


  const discount=el.original_price-el.price;
  let discountPercentage=Math.round((discount/el.original_price)*100);


  return (
    <div>
     {loading? <div
        key={i}
        className="border px-4 py-3  rounded flex flex-col items-center h-[300px] lg:h-[400px] w-full  bg-slate-100 mx-3 "
        onMouseOver={()=>setHover(true)}
        onMouseOut={()=>setHover(false)}
      >
        <div
          onClick={() => handleClick(el)}
          className="relative left-[45%] top-2 "
        >
          {wishlist ? (
            <IoMdHeart className=" translate-y-1 " color="red" size={25} />
          ) : (
            <IoMdHeartEmpty className="hover:scale-110" size={25} />
          )}
        </div>
        <div
          onClick={() => handleData(el)}
          className="rounded flex flex-col items-center"
        >
          <img
            className=" hover:scale-110 transition-all h-[100px] lg:h-[200px]"
            src={el.images}
            alt={el.images}
          />
          <div className="text-center hover:scale-110 transition-all">
            <h3 className="font-semibold ">{newName}</h3>
           <div className="flex gap-4 items-center justify-center">
           <p className="lg:text-lg whitespace-nowrap">Rs ₹{el.price}</p>
           {discountPercentage>0?<span className="border lg:px-3 bg-red-700 text-white font-semibold text-sm text-center px-1 py-1 rounded-full">{discountPercentage}% Off</span>:''}
           </div>
          
            
            <Rating  value={el.rating}/>
          </div>
        </div>
        <div>
          <div>
            {hover&&<button onClick={()=>handleAddtoCart(el)} className="bg-red-500 px-2 py-1 rounded text-white mt-2"  >{click?'Added':'Add to cart'}</button>}
            <Toaster  />
          </div>
        </div>
      </div>:
     <div class="border border-blue-300 shadow rounded-md p-4 h-[300px] lg:h-[400px] max-w-sm w-full mx-auto">
     <div class="animate-pulse flex flex-col items-center space-x-4">
       <div class=" bg-slate-200 h-[100px] lg:h-[200px] w-[300px] "></div>
       <div class="flex-1 space-y-6 py-1">
         <div class="h-2 bg-slate-200 rounded w-[100px] mt-5"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
             <div class="h-2 bg-slate-200 rounded col-span-2"></div>
             <div class="h-2 bg-slate-200 rounded col-span-1"></div>
           </div>
           <div class="h-2 bg-slate-200 rounded"></div>
         </div>
       </div>
     </div>
   </div>
      }
    </div>
  );
};
