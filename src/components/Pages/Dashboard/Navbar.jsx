import React from 'react';
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
    return (
        <nav className='bg-gradient-to-r from-[#73e9fe] to-[#78118f] px-4 py-3 flex justify-between bg-white dark:bg-black text-[#8401A1] dark:text-[#73e9fe]'>
            <div className='flex items-center text-xl'>
                    <a href="/">
                        <img src={"https://i.ibb.co/T4FSNsb/Justlogo.png"} className="w-14 h-12 text-[#8401A1] dark:text-[#73e9fe]" alt="logo" />
                    </a>
                    <a href="/">
                    <h1 className="text-2xl  font-bold italic ">Project Syncify</h1>
                    </a>
            </div>

            <div className='flex items-center gap-x-5'>
                <div className='relative md:w-65'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
                    </span>
                    <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block' placeholder='Search'/>
                </div>

                <div className='text-white'><FaBell className='w-6 h-6'/></div>

                <div className='relative'>
                    <button className='text-white group '>
                        <FaUserCircle className='w-6 h-6 mt-1'/>
                        <div className='z-10 absolute hidden bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                            <ul className='py-2 text-sm text-gray-950'>
                                <li><a href="">Profile</a></li>
                                <li><a href="">Setting</a></li>
                                <li><a href="">Log Out</a></li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;