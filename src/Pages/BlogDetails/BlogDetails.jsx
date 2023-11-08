import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


const BlogDetails = () => {
    const blogDetails = useLoaderData()
    const [data, setData] = useState([])
    const { user } = useAuth()
    const handelComment = e => {
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value
        const displayName = user.displayName
        const photoURL = user.photoURL
        const allComment = { comment, displayName, photoURL }
        axios.post("http://localhost:5000/api/v1/comment-list", allComment)
            .then(data => {
                if (data.data.insertedId) {
                    toast.success("Comment Suceesfully")
                    form.reset()
                }
            })
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/comment-list')
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const fetchedData = await response.json();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
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
                            <div className="flex justify-center items-center mb-4">
                                <Link to={`/updateBlog/${blogDetails._id}`}>
                                    <button className="btn btn-secondary">Update Blog</button>
                                </Link>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div>
                        {user.email === blogDetails.email ? (
                            <div></div>
                        ) : (
                            <div className="w-1/2 bg-white mb-4 pt-4 rounded shadow-lg 
                    mx-auto">
                                <h2 className="text-center font-bold text-sm mb-2 sm:text-xl">Please Put Your comment Here</h2>
                                <div className=" flex ml-3  items-center">
                                    {
                                        data.map((item, index) => {
                                            return (<div key={index}>
                                                <img src={item.photoURL} alt="" className="rounded-full mr-3" />
                                                <h1 className="font-semibold mr-3">{item.displayName}</h1>
                                            </div>)
                                        })
                                    }
                                </div>
                                <form onSubmit={handelComment}>
                                    <div className="mt-3 p-3 w-full">
                                        <textarea rows="3" className="border p-2 rounded w-full" name="comment" placeholder="Write something..."></textarea>
                                    </div>
                                    <div className="flex justify-between mx-3">
                                        <input type="submit" className=" px-4 py-1 mb-2 bg-gray-800 text-white rounded font-light hover:bg-gray-700" value="submit" />
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}




export default BlogDetails;