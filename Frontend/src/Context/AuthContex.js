
import { createContext,useState } from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [Auth,setAuth]=useState({
        isAuth:false,
        token:null,
    })




    const [Name,setName]=useState("")

    const handleLogin=(token)=>{
      
        setAuth({
            ...Auth,
            isAuth:true,
            token:token
        })
    }
    const handleLogout=()=>{
        
        setAuth({
            ...Auth,
            isAuth:false,
            token:null
        })
    }

    const getuserName=(username)=>{
        setName({
            ...Name,
            username:username
        })
    }

    return (
        <AuthContext.Provider value={{Auth,setAuth ,Name,handleLogin,handleLogout,getuserName}}>
            {children}
        </AuthContext.Provider>
    )
}