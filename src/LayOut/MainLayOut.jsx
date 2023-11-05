import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/NavBar";



const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;