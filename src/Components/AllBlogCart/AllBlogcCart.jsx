

const AllBlogcCart = ({allBlog}) => {
    const { title, photo, shortDescription, catageroy } = allBlog || {}
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
                <button className="btn btn-active btn-secondary ">Details</button>
                <button className="btn btn-active btn-secondary ">Wislist</button>
            </div>
        </div>
    );
};

export default AllBlogcCart;