import { Link } from "react-router-dom";


const PostSection = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                    <div className="text-black font-bold ">Our Team Member</div>
                </div>
                <img src="https://i.ibb.co/3dmHzzY/metting.jpg" alt="Contact our customer support" className="rounded mt-4" />
            </div>
            <form className="space-y-6">
                <div>
                    <label className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="Your email" className="w-full p-3 rounded dark:bg-gray-800" />
                </div>
                <div>
                    <label className="text-sm">Message</label>
                    <textarea id="message" rows="3" placeholder="Your message" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                </div>
                <Link to='/send'>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded  dark:text-gray-900">Send Message</button>
                </Link>
            </form>
        </div>
    );
};

export default PostSection;