import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
    const [theme, setTheme] = useState("light");
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
        // <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
        //     <Navbar
        //      sidebarToggle={sidebarToggle} 
        //      setSidebarToggle={setSidebarToggle}/>

        // </div>

        <div className='bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]'>
            <Navbar handleThemeChange={handleThemeChange}/>
            <Sidebar/>
        </div>
    );
};

export default Dashboard;