import { FaGooglePlus } from 'react-icons/fa'

const SocialLogin = () => {
    return (
        <div>
            <div className="divider font-bold">Continue with</div>
            <div className="flex items-center justify-center ">
                <button
                    className="btn btn-sm btn-primary">Google
                    <FaGooglePlus></FaGooglePlus>
                    </button>
                
            </div>
        </div>
    );
};

export default SocialLogin;