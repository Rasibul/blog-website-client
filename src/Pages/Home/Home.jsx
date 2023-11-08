import Banner from "./Banner";
import BlogCart from "../../Components/BlogCart/BlogCart";
import Newletter from "../../Components/Newletter";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { motion } from 'framer-motion';
import { useQuery } from "@tanstack/react-query";
import PostSection from "../../Components/PostSection/PostSection";


const Home = () => {

  const { data, isLoading } = useQuery(
    {
      queryKey: ['repoData'],
      queryFn: async () => {
        const response = await fetch('http://localhost:5000/api/v1/all-blogs')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      }

    })

  if (isLoading) {
    return (<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>)
  }
  let sortedBlog = data.sort((a, b) => new Date(b.date - new Date(a.date)))
  let recentBlog = sortedBlog.slice(0, 6)

  console.log(data)
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 10 }} >
        <Banner></Banner>
        <h2 className="text-center text-base sm:text-3xl font-bold py-5">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 max-w-[1300px]  mx-auto">
          {
            recentBlog.map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
          }
        </div>
        <PostSection></PostSection>
        <Newletter></Newletter>
        <Testimonial></Testimonial>
      </motion.div>
    </>
  );
};

export default Home;