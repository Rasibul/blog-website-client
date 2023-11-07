import { Link, useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blogDetails = useLoaderData()
    // console.log(blogDetails)
    return (
        <div className="card card-compact  shadow-xl">
            <img src={blogDetails.photo} alt="Shoes" />
            <div className="card-body">
                <span className=" p-1 w-fit rounded font-medium">
                    Title:{blogDetails.title}
                </span>
                <h2 className=" text-md font-bold">{blogDetails.shortDescription}</h2>
                <span className="sm:text-purple-600 text-center font-bold mb-2 text-6xl">Explain Our Blog:</span>
                <h2 className=" text-md font-bold">
                    {blogDetails.longDescription}</h2>
            </div>
            <Link to={`/updateBlog/${blogDetails._id}`}>
                <button className="btn btn-active btn-secondary ">Update Blog</button>
            </Link>
        </div>
    );
};

export default BlogDetails;