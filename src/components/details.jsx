import { useParams } from "react-router-dom"

const UserDetails = ()=>{
    const params = useParams()
    return(
<div>
    Details of user {params.id}
</div>
    )
}


export default UserDetails