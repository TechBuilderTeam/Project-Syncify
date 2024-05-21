import React, { useEffect, useState } from 'react';
import AuthProviders from '../../../Providers/AuthProviders/AuthProviders';
import DynamicSidebar from './DynamicSidebar';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';


const DynamicDashboard = () => {
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
      <div className="bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe] ">
        <div className="flex flex-col">
          <Navbar handleThemeChange={handleThemeChange} />
          {/* <Navbar/> */}
          <div className="w-1/4 ">
            <DynamicSidebar id={id} />
          </div>
          <div className="w-3/4 ml-32 md:ml-56 relative h-full mt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProviders>
  );
};

export default DynamicDashboard;