import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContex";



export const Login = () => {

 
  const [user,Setuser]=useState({
    email:"",
    password:""
  })

  const [toggle,setToggle]=useState(false)


  const {handleLogin,handleLogout,getuserName}=useContext(AuthContext)

  const navigate=useNavigate()



 

  const handleUser=(e)=>{
    
    const {name,value}=e.target

    Setuser({
      ...user,
      [name]:value
    })


  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const {email,password}=user;
   
    axios.post('https://bazaarcartbackend.vercel.app/login',{email,password})
    .then((res)=>{

   
      if(res.data.msg==='Loggin Success'){

        console.log(res.data.token)
        //localStorage.setItem('username',JSON.stringify(res.data.user))
        localStorage.setItem('token',(res.data.token))
        
        toast.success(res.data.msg)

        
        
        handleSession()
 
      }
      else{
        toast.error(res.data.msg)
      }
    })
    .catch((e)=>{
     console.log(e)
    })

  }





  




  const handleSession=()=>{
    let token=localStorage.getItem("token")
    axios.post("https://bazaarcartbackend.vercel.app/sessionRoute",{}, {
      headers: {
        authentication:token,
      },
    }).then((res) => {

     console.log(res.data)

      if(res.data.isAuth){
      
        setTimeout(()=>{
          handleLogin(token)
          navigate('/cart')
          getuserName(res.data.username)
        },)
        
      }
      else{
        handleLogout()
 
      }

      
    

    }).catch((e)=>{
     console.log(e)
    });
  }


useEffect(()=>{
handleSession()
},[]) 


  return (
    <div className="flex  justify-center py-10 ">
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-300 gap-3 justify-center w-[400px] items-center mt-10 py-10 rounded-lg shadow-xl ">
      <div className="flex flex-col items-center">
     
     <img className="w-[100px] rounded-full" src="https://cdn.dribbble.com/users/1062923/screenshots/3188644/zamok.gif" alt="" />
     <h1 className="font-bold text-slate-800 text-2xl ">Login</h1>
     </div>
        <input className="w-[250px] outline-none px-3 py-1 placeholder:text-sm rounded-md " name="email" value={user.email} onChange={handleUser} type="email" placeholder="Enter Email"/>
        <label className="relative block" >
        <span className="cursor-pointer absolute inset-2 left-56" onClick={()=>setToggle(!toggle)}>{toggle?<AiOutlineEye size={20}/>:<AiOutlineEyeInvisible size={20}/>}</span>
        <input className="w-[250px] outline-none px-3 py-1 placeholder:text-sm rounded-md  " name="password" value={user.password} onChange={handleUser} type={toggle?'text':'password'} placeholder="Enter Password"  />
        </label>
        <Link to={'/signup'} className="ml-[50%] hover:text-blue-600 hover:underline">Create a Account</Link>
        <input  className="bg-red-500 py-2 px-4 rounded-xl text-white hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-blue-500" type="submit" value="Login" />
      </form>
      <Toaster/>
    </div>
  );
};