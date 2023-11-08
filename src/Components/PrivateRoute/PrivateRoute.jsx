import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if(user){
        return children
    }
    return <Navigate state ={location.pathname} to='/login'></Navigate>
}
export default PrivateRoute;