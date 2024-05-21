import React from 'react';
import AuthProviders from '../../../Providers/AuthProviders/AuthProviders';
import DynamicSidebar from './DynamicSidebar';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../../pages/shared/Navbar';

const DynamicDashboard = () => {
    const workspaceData = useLoaderData();
    console.log({workspaceData})
    const {id} = useParams();

    return (
        <AuthProviders>
            <div className="bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe] ">
              <div className="flex flex-col">
                <Navbar />
                {/* <Navbar/> */}
                <div className="w-1/4 ">
                  <DynamicSidebar id={id}/>
                </div>
                <div className="w-3/4 ml-32 md:ml-56 relative h-full mt-20">
                  <Outlet />
                </div>
              </div>
              {/* <Navbar handleThemeChange={handleThemeChange} /> */}
            </div>
        </AuthProviders>
    );
};

export default DynamicDashboard;