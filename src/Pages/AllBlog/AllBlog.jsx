import { useLoaderData } from "react-router-dom";
import AllBlogcCart from "../../Components/AllBlogCart/AllBlogcCart";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";



const AllBlog = () => {
    const allBlogs = useLoaderData()
    const [searchTerm, setSearchTerm] = useState('')
    const [catageroy,setCatageroy] = useState()
    const catageroies = ['Mindfulness','Technology','Cooking','Finance','Productivity','Travel']
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
                        <label  className="sr-only">My field</label>
                        <select className="appearance-none  border-solid border-2 border-bla-500 py-1 px-2" name="whatever" onChange={(e) => setCatageroy(e.target.value)}>
                            {/* <option value="">Please choose&hellip;</option>
                            <option value="1">Mindfulness</option>
                            <option value="2">Technology</option>
                            <option value="3">Cooking</option>
                            <option value="3">Finance</option>
                            <option value="3">Productivity</option>
                            <option value="3">Travel</option> */}
                            {catageroies.map((op)=><option key={op.id}>{op}</option>)}
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