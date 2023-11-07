import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const AllBlogcCart = ({ allBlog }) => {
    const { _id, title, photo, shortDescription, catageroy } = allBlog || {}
    const handeToAddCart = (p) => {
        axios.post("http://localhost:5000/api/v1/wislist", p)
            .then(data => {
                if (data.data.insertedId) {
                    toast.success("Add To Wishlist Sucessfully")

                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="">
                <img className="h-80 object-cover flex-grow"
                    src={photo}
                    alt=""
                />
            </div>
            <div className="p-4">
                <h4 className="block font-bold text-2xl  leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </h4>
                <p className="block mt-2 text-base bg-[#0052ff33] w-fit antialiased font-normal leading-relaxed text-[#0052FF]">
                    {catageroy}
                </p>
            </div>
            <div className="p-2 font-bold flex-grow">
                <p>{shortDescription}</p>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">

                </p>
            </div>
            <div className="flex justify-between px-2 pb-4">
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-active btn-secondary ">Details</button>
                </Link>
                    <button onClick={() => handeToAddCart(allBlog)} className="btn btn-active btn-secondary ">Wislist</button>
            </div>
        </div>
    );
};

export default AllBlogcCart;