import { NavLink } from "react-router-dom"
import { useAuth } from "../providers/auth"

function NavBar(){
    const auth = useAuth()
    return(
        <div className="navbar-nav">
            <ul>
                <li>
                <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                <NavLink to={'/about'}>About</NavLink>
                </li>
                
                    {!auth.user&& (<li><NavLink to={'/login'}>Login</NavLink></li>)}
                
                
                <li>
                <NavLink to={'/product'}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'}>Users</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>
                    </li>            </ul>

        </div>
    )
}
export default NavBar