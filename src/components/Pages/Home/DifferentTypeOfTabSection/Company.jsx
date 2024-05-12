import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Company = () => {
    return (
        <div className='flex flex-wrap md:flex-nowrap gap-4 my-10'>
                <div className='w-full md:w-1/2 mx-2'>
                <img src="https://assets.asana.biz/transform/8e33dc5e-f177-43c6-891a-60c1e5a5d789/home24-company-team-ui?io=transform:fill" alt="" />
                </div>

                <div className='w-full md:w-auto mx-4'>
                    <h2 className='text-2xl font-semibold'>Operationalize goals</h2>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Connect work to company goals  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Automate workflows across departments  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Report on progress and address bottlenecks  </p>
                    <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-[#8401A1] dark:bg-[#73e9fe]  text-white dark:text-black font-semibold hover:bg-cyan-600 hover:text-black dark:hover:bg-[#8401A1] dark:hover:text-white">See how it works</button>
                </div>
            </div>
    );
};

export default Company;