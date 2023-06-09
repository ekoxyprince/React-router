import { Link } from "react-router-dom"

function NotFound(){
     return(
        <div>
            404 Not Found
            <br/>
            <button className="btn btn-info">
              <Link>
                Back Home
              </Link>
            </button>
        </div>
     )
}

export default NotFound