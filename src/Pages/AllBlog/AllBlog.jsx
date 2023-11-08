import { useLoaderData } from "react-router-dom";
import AllBlogcCart from "../../Components/AllBlogCart/AllBlogcCart";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";



const AllBlog = () => {
    const allBlogs = useLoaderData()
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <h2 className="text-center text-base sm:text-3xl font-bold py-5">All Blogs Here</h2>
            <div className="py-4 max-w-[1300px]  mx-auto">
                <h2 className=" text-base sm:text-2xl font-bold">Search Your Favourite Blog</h2>
                <div className="form-control">
                    <form className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" onChange={(e) => setSearchTerm(e.target.value)} />
                        <button className="btn btn-square">
                            <FaSearch className='text-slate-600'></FaSearch>
                        </button>
                    </form>
                </div>
            </div>
            <form className=" p-10">
                <fieldset>
                    <div className="text-gray-800">
                        <h2 className="text-xl font-bold">Chose Your Catageroy</h2>
                        <label className="sr-only">My field</label>
                        <select className="appearance-none  border-solid border-2 border-bla-500 py-1 px-2" name="category" >
                            <option value="">Please choose&hellip;</option>
                            <option value="Mindfulness">Mindfulness</option>
                            <option value="Technology">Technology</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Finance">Finance</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Travel">Travel</option>
                        </select>
                    </div>
                </fieldset>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
                {
                    allBlogs.filter((item) => {
                        return searchTerm.toLowerCase() === ''
                            ? item
                            : item.title.toLowerCase().includes(searchTerm);
                    })
                        .map(allBlog => <AllBlogcCart key={allBlog.id} allBlog={allBlog}></AllBlogcCart>)
                }
            </div>

        </div>
    );
};

export default AllBlog;