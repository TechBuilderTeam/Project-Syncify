import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
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
        </div>
    );
};

export default Root;