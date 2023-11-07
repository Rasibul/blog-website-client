import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {
    const { createUser, handelProfile } = useAuth()
    const navigate = useNavigate()


    const handelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        const user = { email, name, password }
        console.log(user)

        // validation
        if (password.length < 6) {
            toast.error('password must be at least 6 character')
            return
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            toast.error('password must be at least one special character')
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('password must be at least one captial character')
        }


        createUser(email, password)
            .then(() => {
                handelProfile(name)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate("/")
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-purple-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-purple-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" required className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6 p-0">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <h2 className="text-sm">
                            Alredy Have An Account? <Link to="/login" className="label-text-alt link link-hover text-sm">Please Login</Link>
                        </h2>
                        <SocialLogin />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;