import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



const WishListCard = ({ wisList, handelDelete }) => {
    const { _id, title, photo, shortDescription, catageroy,email } = wisList || {}
    const {user} = useAuth()
    return (
        <div>
            {user.email === email ? (
                        <div className="flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="">
                            <img className="h-80 object-cover flex-grow"
                                src={photo}
                                alt=""
                            />
                        </div>
                        <div className="p-4">
                            <h4 className="font-bold text-2xl  leading-snug tracking-normal text-blue-gray-900">
                                {title}
                            </h4>
                            <p className="block mt-2 text-base bg-[#0052ff33] w-fit  font-normal leading-relaxed text-[#0052FF]">
                                {catageroy}
                            </p>
                        </div>
                        <div className="p-2 font-bold flex-grow">
                            <p>{shortDescription}</p>
                            <p className="block font-sans text-base  font-normal leading-relaxed">
                            </p>
                        </div>
                        <div className="flex justify-between px-2 pb-4">
                            <button className="btn btn-active btn-secondary ">Details</button>
                            <Link to={'/allblog'}>
                                <button onClick={() => handelDelete(_id)} className="btn btn-active btn-secondary ">Remove Cart</button>
                            </Link>
                        </div>
                    </div>
            ):(
                <div></div>
            )}
        </div>
    );
};

export default WishListCard;