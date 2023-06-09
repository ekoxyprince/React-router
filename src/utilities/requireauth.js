import { useAuth } from "../providers/auth"
import {Navigate, useLocation}  from "react-router-dom"



const IsAuth = ({children})=>{
    const auth = useAuth()
    const location = useLocation()
    if(!auth.user){
        return(
           <Navigate to={'/login'} state={{path:location.pathname}}/> 
        )
    }else{
        return children
    }
}

export default IsAuth