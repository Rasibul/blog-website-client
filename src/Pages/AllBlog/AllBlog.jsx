import { useLoaderData } from "react-router-dom";
import AllBlogcCart from "../../Components/AllBlogCart/AllBlogcCart";
import { FaSearch } from "react-icons/fa";


const AllBlog = () => {
    const allBlogs = useLoaderData()
    return (
        <div>
            <h2 className="text-center text-base sm:text-3xl font-bold py-5">All Blogs Here</h2>
            <div className="py-4 max-w-[1300px]  mx-auto">
                <h2 className=" text-base sm:text-2xl font-bold">Search Your Favourite Blog</h2>
                <form className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <FaSearch className='text-slate-600'></FaSearch>
                        </button>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
                {
                    allBlogs.map(allBlog => <AllBlogcCart key={allBlog.id} allBlog={allBlog}></AllBlogcCart>)
                }
            </div>

        </div>
    );
};

export default AllBlog;