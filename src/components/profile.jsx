import { useAuth } from "../providers/auth"
import { useNavigate } from "react-router-dom";

const Profile = ()=>{
    const auth = useAuth()
    const navigator = useNavigate()
    function handleLogout(e){
    e.preventDefault();
    auth.logout()
    navigator('/login')
    }
    return(
     <div>
        Welcome {auth.user} 

    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
     </div>
    )
}


export {Profile}