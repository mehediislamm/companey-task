import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Navbar/Navbar";
import Footer from "../Page/Home/Footer/Footer";

 

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;