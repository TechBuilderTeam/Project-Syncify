import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
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
  }, [theme]);
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    // <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
    //     <Navbar
    //      sidebarToggle={sidebarToggle}
    //      setSidebarToggle={setSidebarToggle}/>

    // </div>

        <div className='bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe] '>
            <div className='flex flex-col'>
                <Navbar handleThemeChange={handleThemeChange} />
                <div className='w-1/4 '>
                    <Sidebar />
                </div>
                <div className='w-3/4 ml-20 md:ml-56 relative h-full'>
                    <Outlet />
                </div>

            </div>
            {/* <Navbar handleThemeChange={handleThemeChange} /> */}


        </div>
    );
};

export default Dashboard;
