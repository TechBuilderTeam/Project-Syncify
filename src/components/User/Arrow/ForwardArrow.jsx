import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

const ForwardArrow = ({onClick}) => {
    return (
        <div className='absolute left-4 top-[184px]' onClick={onClick}>
        <div className=' outline outline-1 outline-offset-1 hover:outline-2 hover:outline-cyan-600 dark:hover:outline-[#0134a1] hover:text-cyan-600 dark:hover:text-[#0401a1]  h-[30px] w-[30px] rounded-full grid place-items-center cursor-pointer'>
            <FaArrowLeft />
        </div>
            
        </div>
    );
};

export default ForwardArrow;