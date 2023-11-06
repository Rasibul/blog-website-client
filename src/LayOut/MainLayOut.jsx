import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/NavBar";
import { Toaster } from "react-hot-toast";



const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default MainLayOut;