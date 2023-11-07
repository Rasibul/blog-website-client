import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlog from "../Pages/AllBlog/AllBlog";
import FeatureBlogs from "../Pages/FeatureBlogs/FeatureBlogs";
import WishList from "../Pages/WishList/WishList";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Components/UpadeteProduct/UpdateBlog";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/api/v1/all-blogs')
            },
            {
                path: "addblog",
                element: <AddBlog></AddBlog>
            },
            {
                path: "allblog",
                element: <AllBlog></AllBlog>,
                loader: () => fetch('http://localhost:5000/api/v1/all-blogs')
            },
            {
                path: "featureblogs",
                element: <FeatureBlogs></FeatureBlogs>
            },
            {
                path: "wishlist",
                element: <PrivateRoute>
                    <WishList></WishList>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/api/v1/wislist')
            },
            {
                path: "details/:id",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/all-blogs/${params.id}`)
            },
            {
                path: "updateBlog/:id",
                element: <UpdateBlog></UpdateBlog>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/all-blogs/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])


export default router;