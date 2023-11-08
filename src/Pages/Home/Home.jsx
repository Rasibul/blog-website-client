import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BlogCart from "../../Components/BlogCart/BlogCart";
import Newletter from "../../Components/Newletter";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { motion } from 'framer-motion';


const Home = () => {
  const allBlogs = useLoaderData()
  const sortedBlog = allBlogs.sort((a, b) => new Date(b.date - new Date(a.date)))
  const recentBlog = sortedBlog.slice(0,6)
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 10 }} >
        <Banner></Banner>
        <h2 className="text-center text-base sm:text-3xl font-bold py-5">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
          {
            recentBlog.map(blog => <BlogCart key={blog.id} blog={blog}></BlogCart>)
          }
        </div>
        <Newletter></Newletter>
        <Testimonial></Testimonial>
      </motion.div>
    </>
  );
};

export default Home;