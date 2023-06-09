import {useNavigate} from "react-router-dom"


function Login(){
    const navigate = useNavigate()
    return(
        <div>
            {/* <Navigate to={'/about'}/> */}
            <form method="post" action="/goat" className="container">
                <div className="form-group">
                   <input type="text" className="form-control" />
                   <label>Name</label>
                </div>
                <div className="form-group">
                    <label>Email</label>
                <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                 <button onClick={(e)=>{
                    e.preventDefault()
                    return navigate(-1)
                 }} className="btn btn-primary">
                  Login
                 </button>
                </div>
            </form>
        </div>
    )
}

export default Login