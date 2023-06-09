import {useNavigate, useLocation} from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../providers/auth"


function Login(){
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    const auth = useAuth()
    function handleLogin(e){
        auth.login(user)
        navigate(redirectPath,{replace:true})
    }
    return(
        <div>
           
         
                <div className="form-group">
                   <input type="text" className="form-control" onChange={(e)=>{
                    setUser(e.target.value)
                   }}/>
                   <label>Name</label>
                </div>
                
                <div className="form-group">
                 <button onClick={handleLogin} className="btn btn-primary">
                  Login
                 </button>
                </div>
        
        </div>
    )
}

export default Login