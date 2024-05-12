import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Operations = () => {
    return (
        <div className='flex flex-wrap md:flex-nowrap gap-4 my-10'>
                <div className='w-full md:w-1/2 mx-2'>
                <img src="https://assets.asana.biz/transform/d06c5984-1ba8-478f-af99-b71be0f7fd61/home24-operations-team-ui?io=transform:fill" alt="" />
                </div>

                <div className='w-full md:w-auto mx-4'>
                    <h2 className='text-2xl font-semibold'>Drive operational efficiency</h2>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Standardize and automate processes  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Track work and see progress in real time  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Unblock teams to hit revenue goals  </p>
                    <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-[#8401A1] dark:bg-[#73e9fe]  text-white dark:text-black font-semibold hover:bg-cyan-600 hover:text-black dark:hover:bg-[#8401A1] dark:hover:text-white">Explore Operations</button>
                </div>
            </div>
    );
};

export default Operations;