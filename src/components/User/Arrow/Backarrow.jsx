import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Backarrow = ({onClick}) => {
    return (
        
            
         <div className='absolute left-20 top-[184px]' onClick={onClick} >
            <div className=' outline outline-1 outline-offset-1 hover:outline-2 hover:outline-cyan-600 dark:hover:outline-[#0c01a1] hover:text-cyan-600 dark:hover:text-[#0141a1]  h-[30px] w-[30px] rounded-full grid place-items-center cursor-pointer'>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default Backarrow;