import { useLoaderData } from "react-router-dom";
import WishListCard from "../../Components/WishListCard/WishListCard";



const WishList = () => {
    const allWishList = useLoaderData()
    // console.log(allWishList)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
                {
                    allWishList.map(wisList => <WishListCard key={WishList.id} wisList={wisList}></WishListCard> )
                }
            </div>
        </div>
    );
};

export default WishList;