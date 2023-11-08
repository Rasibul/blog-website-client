import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const BlogDetails = () => {
    const blogDetails = useLoaderData()
    const {user} = useAuth()
    // const userEmail = user.email
    
    return (
        <div className="card card-compact  shadow-xl">
            <img src={blogDetails.photo} alt="Shoes" />
            <div className="card-body">
                <span className=" p-1 w-fit rounded font-medium">
                    Title:{blogDetails.title}
                </span>
                <h2 className=" text-md font-bold">{blogDetails.shortDescription}</h2>
                <span className="text-purple-600 text-center font-bold mb-2 sm:text-6xl">Explain Our Blog:</span>
                <h2 className=" text-md font-bold">
                    {blogDetails.longDescription}</h2>
            </div>
            <div>
                {user.email === blogDetails.email ? (
                    <div className="flex justify-center items-center">
                    <Link to={`/updateBlog/${blogDetails._id}`}>
                        <button className="btn btn-secondary">Update Blog</button>
                    </Link>
                </div>
                ):(
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default BlogDetails;