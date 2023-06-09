import { Outlet,useSearchParams } from "react-router-dom"

const Users = ()=>{
    const [searchParam,setSearchParam] = useSearchParams()
    const showActiveUsers = searchParam.get('filter') === 'active'
    return(
       <div>
        <h1>User1</h1>
        <h1>User2</h1>
        <h1>User3</h1>
        <div>
            <Outlet/>
        </div>
        <div>
            <button onClick={()=>setSearchParam({filter:'active'})}>Active Users</button>
            <button onClick={()=>setSearchParam({})}>Reset Filter</button>
        </div>
        {showActiveUsers?<h2>Showing all active users</h2>:<p>No active User</p>}
       </div> 
    )
}


export default Users