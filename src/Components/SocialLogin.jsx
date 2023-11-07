import { FaGooglePlus } from 'react-icons/fa'
import { useContext } from "react";
import { AutheContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const SocialLogin = () => {
    const {googleLogin} = useContext(AutheContext)
    const navigate = useNavigate()

    const handelGoogleLogin = (media) => {
        media()
        .then(() => {
            toast.success('User loggedin successfully');
            navigate("/")
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider font-bold">Continue with</div>
            <div className="flex items-center justify-center ">
                <button
                    onClick={() => handelGoogleLogin(googleLogin)}
                    className="btn btn-sm btn-primary">Google
                    <FaGooglePlus></FaGooglePlus>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;