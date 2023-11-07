import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BlogCart from "../../Components/BlogCart/BlogCart";
import Newletter from "../../Components/Newletter";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  const blogs = useLoaderData()
  return (
    <>
      <Banner></Banner>
      <div>
      <h2 className="text-center text-base sm:text-3xl font-bold py-5">Recent Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
                {
                  blogs.map(blog => <BlogCart key={blog.id} blog={blog}></BlogCart>)
                }
            </div>

      </div>
      <Newletter></Newletter>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;