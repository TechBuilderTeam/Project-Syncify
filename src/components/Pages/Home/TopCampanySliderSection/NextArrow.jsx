import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const NextArrow = ({onClick}) => {
    return (
        <div className='absolute left-20 top-[434px]' onClick={onClick} >
            <div className='bg-gray-100 outline outline-1 outline-offset-1 hover:outline-2 hover:bg-gray-300 h-[30px] w-[30px] rounded-full grid place-items-center cursor-pointer'>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default NextArrow;