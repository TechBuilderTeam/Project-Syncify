import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Product = () => {
    return (
        <div className='flex gap-4 my-10'>
                <div className='w-1/2 mx-2'>
                    <img src="https://assets.asana.biz/transform/070f1abb-5a90-477c-8b90-b5eb6ba3a3f9/home24-product-team-ui?io=transform:fill" alt="" />
                </div>

                <div className='mx-4'>
                    <h2 className='text-2xl font-semibold'>Launch better products faster</h2>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Keep product development on track  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Centralize launch information  </p>
                    <p className='flex items-center gap-2 my-2 text-lg'><FaArrowCircleRight />Tie your product roadmap to your strategy  </p>
                    <button className="border-solid border border-slate-400 rounded py-2 px-8 my-4 bg-[#8401A1] dark:bg-[#73e9fe]  text-white dark:text-black font-semibold hover:bg-cyan-600 hover:text-black dark:hover:bg-[#8401A1] dark:hover:text-white">Explore Product</button>
                </div>
            </div>
    );
};

export default Product;