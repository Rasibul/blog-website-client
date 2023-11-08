import toast from "react-hot-toast";

const Newletter = () => {
    const handelSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        if(email){
            toast.success('Thank you for subscribing to our newsletter')
            form.reset()
        }
    }
    return (
        <div className="w-full p-5">
            <div className="max-w-[1300px]  mx-auto flex flex-col xl:flex-row px-5 py-8 xl:py-14 text-gray-500 bg-[#e11d48] rounded-2xl">
                <div className="w-full mb-6 xl:mb-0 sm:text-center">
                    <div className="mb-4 text-gray-900 text-3xl font-extrabold">Join 2,000+ subscribers</div>
                    <div className="text-lg font-bold text-black">Stay in the loop with everything you need to know.</div>
                </div>
                <div className="w-full">
                        <form onSubmit={handelSubmit} className="flex flex-col justify-center sm:flex-row gap-3 w-full">
                            <input type="email" name="email" placeholder="Enter your email" className="sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow" />
                            <input type="submit" className="sm:w-1/4 h-12 text-white btn btn-active btn-secondary rounded-lg shadow transition-all duration-300 ease-in-out hover:btn-secondary" value="Subscribe" />
                        </form>
                    <div className="mt-3 text-sm sm:text-center text-black">We care about your data in our <u className="cursor-pointer transition-all duration-300 ease-in-out text-black
                    hover:text-gray-700">privacy policy</u>.</div>
                </div>
            </div>
        </div>
    );
};

export default Newletter;