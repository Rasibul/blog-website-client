import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";


const Login = () => {
    return (
        <div className="hero min-h-screen bg-purple-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-purple-100">
                <form  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6 p-0">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <label className="label">
                        New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                    </label>
                    <SocialLogin/>
                </form>

            </div>
        </div>
    </div>
    );
};

export default Login;