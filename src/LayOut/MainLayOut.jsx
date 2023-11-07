import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";



const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayOut;