import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Marketing = () => {
    return (
        <div className='flex gap-4 my-10'>
                <div className='w-1/2 mx-2'>
                <img src="https://assets.asana.biz/transform/fb6b5fb5-8a08-4232-aa6c-0f1515e78d57/home24-marketing-team-en-ui?io=transform:fill" alt="" />
                </div>

                <div className='mx-4'>
                    <h2 className='text-2xl font-semibold'>Meet campaign goals</h2>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Manage events and editorial calendars  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Manage events and editorial calendars  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Manage events and editorial calendars  </p>
                    <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-black text-white font-semibold hover:bg-red-400 hover:text-black ">Explore Marketing</button>
                </div>
            </div>
    );
};

export default Marketing;