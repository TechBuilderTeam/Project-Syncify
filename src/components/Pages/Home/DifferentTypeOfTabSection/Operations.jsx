import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Operations = () => {
    return (
        <div className='flex gap-4 my-10'>
                <div className='w-1/2 mx-2'>
                <img src="https://assets.asana.biz/transform/d06c5984-1ba8-478f-af99-b71be0f7fd61/home24-operations-team-ui?io=transform:fill" alt="" />
                </div>

                <div className='mx-4'>
                    <h2 className='text-2xl font-semibold'>Drive operational efficiency</h2>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Standardize and automate processes  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Track work and see progress in real time  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Unblock teams to hit revenue goals  </p>
                    <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-black text-white font-semibold hover:bg-red-400 hover:text-black ">Explore Operations</button>
                </div>
            </div>
    );
};

export default Operations;