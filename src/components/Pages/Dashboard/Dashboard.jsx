import React from 'react';
import AuthProviders from '../../../Providers/AuthProviders/AuthProviders';
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import Workspace from "../Workspace/Workspace";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  // const workspaceData = useLoaderData();
  // console.log({workspaceData})

  const {id} = useParams()
  console.log('dashboard id -> ', id)

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
    // <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
    //     <Navbar
    //      sidebarToggle={sidebarToggle}
    //      setSidebarToggle={setSidebarToggle}/>

        // </div>
        <AuthProviders>
            <div className="bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe] ">
              <div className="flex flex-col">
                <Navbar handleThemeChange={handleThemeChange} />
                <div className="w-1/4 ">
                  <Sidebar />
                </div>
                <div className="w-3/4 ml-32 md:ml-56 relative h-full">
                  <Outlet />
                </div>
              </div>
              {/* <Navbar handleThemeChange={handleThemeChange} /> */}
            </div>
        </AuthProviders>
        
    );
};

export default Dashboard;
