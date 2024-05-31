import { useEffect, useState } from 'react';
import AuthProviders from '../../../Providers/AuthProviders/AuthProviders';
import DynamicSidebar from './DynamicSidebar';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';
import axios from 'axios';


const DynamicDashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const workspaceData = useLoaderData();
  console.log({ workspaceData })
  const { id } = useParams();

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
  };
  
  
  return (
    <AuthProviders>
      <div className="bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]">
        <div className="flex flex-col">
          <Navbar handleThemeChange={handleThemeChange} sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
          {/* <Navbar/> */}
          <div className={`${sidebarToggle ? "w-20" : "w-1/4"}`}>
            <DynamicSidebar id={id} sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
          </div>
          <div className={`${sidebarToggle ? "w-11/12 px-4 ml-16 md:ml-32 " : "w-3/4 ml-32 md:ml-64"}  relative  pt-10` }>
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProviders>
  );
};

export default DynamicDashboard;