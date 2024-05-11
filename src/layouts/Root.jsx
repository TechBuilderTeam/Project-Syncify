import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useEffect, useState } from "react";


const Root = () => {
    const [theme, setTheme] = useState("light");
    // const [isDarkTheme, setIsDarkTheme] = useState(false);
    // const toggleTheme = () => {
    //     setIsDarkTheme((prevTheme) => !prevTheme);
    // };

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const handleThemeChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    return (
        <div className="bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]">
            <Navbar handleThemeChange={handleThemeChange} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
