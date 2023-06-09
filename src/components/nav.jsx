import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar-nav">
            <ul>
                <li>
                <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                <NavLink to={'/login'}>Login</NavLink>
                </li>
                <li>
                <NavLink to={'/product'}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'}>Users</NavLink>
                </li>
            </ul>

        </div>
    )
}
export default NavBar