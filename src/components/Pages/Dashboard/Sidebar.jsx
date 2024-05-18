import React from 'react';
import Dashboard from './Dashboard';
import {FaBoxTissue,FaChalkboard, FaPoll} from 'react-icons/fa';
import { CiViewTimeline } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaListUl } from "react-icons/fa6";

const Sidebar = ({sidebarToggle}) => {
    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-30 md:w-60 bg-gradient-to-b from-[#73e9fe] to-[#78118f] fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className='text-2x text-white font-bold text-center'>Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                       <CiViewTimeline className='inline-block w-6 h-6 mr-2 -mt-2'/>
                       Timeline
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                       <FaChalkboard className='inline-block w-6 h-6 mr-2 -mt-2'/>
                       Board
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                       <SlCalender className='inline-block w-6 h-6 mr-2 -mt-2'/>
                       Calendar <span>NEW</span>
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                       <FaListUl className='inline-block w-6 h-6 mr-2 -mt-2'/>
                       List
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                       <FaBoxTissue className='inline-block w-6 h-6 mr-2 -mt-2'/>
                       Isuues
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;