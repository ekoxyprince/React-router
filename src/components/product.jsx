import { Link,Outlet } from "react-router-dom"

const Product = () => {
    return (
        <>
       <div>
     <input type="seaarch" placeholder="search"/>
       </div> 
       <div>
     <div>
     <Link to={'featured'}>Featured</Link>
     </div>
     <div>
     <Link to={'new'}>New</Link>
     </div>
       </div>
       <Outlet/>
       </>
    )
}

export default Product