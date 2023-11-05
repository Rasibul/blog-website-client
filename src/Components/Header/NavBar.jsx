import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="addblog">Add Blog</NavLink></li>
        <li><NavLink to="allblog">All Blogs</NavLink></li>
        <li><NavLink to="featureblogs">Feture Blogs</NavLink></li>
        <li><NavLink to="wishlist">Wish List</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center ">
                <img className="w-12 sm:w-10 rounded-full lg:hidden" src="https://i.ibb.co/whc2mgP/Minimalist-Simple-Brand-Logo-1.png" alt="" />
                        <h2 className="text-base sm:text-3xl  font-bold"> <span className="text-xl sm:text-3xl text-purple-800 font-bold italic">W</span>ord<span className="text-xl sm:text-3xl text-purple-800 font-bold italic">
                            N
                        </span>
                        est
                        </h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    {/* <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div> */}
                </label>
                <Link to='/login'>
                    <button className="btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;