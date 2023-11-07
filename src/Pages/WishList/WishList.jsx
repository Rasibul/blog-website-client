import { useLoaderData } from "react-router-dom";
import WishListCard from "../../Components/WishListCard/WishListCard";
import axios from "axios";
import toast from "react-hot-toast";


const WishList = () => {
    const allWishList = useLoaderData()
    const handelDelete= _id => {
        axios.delete(`http://localhost:5000/api/v1/wishlist/${_id}`)
        .then(data => {
            if (data.data.deletedCount > 0) {
                toast.success("Delted Sucessfully")
            }
        })
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
                {
                    allWishList.map(wisList => <WishListCard key={WishList.id} wisList={wisList} handelDelete={handelDelete} ></WishListCard> )
                }
            </div>
        </div>
    );
};

export default WishList;