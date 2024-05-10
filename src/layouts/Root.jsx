import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useState } from "react";


const Root = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };
    return (
        <div data-theme={isDarkTheme ? "night" : "light"}>
            <Navbar  toggleTheme={toggleTheme}/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
