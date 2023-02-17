
import { useContext } from "react"
import { Navigate } from "react-router"
import { AuthContext } from "./AuthContex"

export const Private=({children})=>{
const {Auth}=useContext(AuthContext)



if(!Auth.isAuth){

    return <Navigate to="/login" replace={true} />
}
 return children
}
