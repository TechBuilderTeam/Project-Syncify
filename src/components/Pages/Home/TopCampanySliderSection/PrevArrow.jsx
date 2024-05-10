import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
const PrevArrow = ({onClick}) => {
    return (
        <div className='absolute left-0 top-[434px] ' onClick={onClick}>
            <div className='bg-gray-100 outline outline-1 outline-offset-1 hover:outline-2 hover:bg-gray-300 h-[30px] w-[30px] rounded-full grid place-items-center cursor-pointer'>
                <FaArrowLeft />
            </div>
        </div>
    );
};

export default PrevArrow;