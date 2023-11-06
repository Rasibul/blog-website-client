import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlog from "../Pages/AllBlog/AllBlog";
import FeatureBlogs from "../Pages/FeatureBlogs/FeatureBlogs";
import WishList from "../Pages/WishList/WishList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path:"",
        element:<MainLayOut></MainLayOut>,
        children: [
            {
                path:"",
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/api/v1/all-blogs')
            },
            {
                path:"addblog",
                element:<AddBlog></AddBlog>
            },
            {
                path:"allblog",
                element:<AllBlog></AllBlog>
            },
            {
                path:"featureblogs",
                element:<FeatureBlogs></FeatureBlogs>
            },
            {
                path:"wishlist",
                element:<WishList></WishList>
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])
  

export default router;