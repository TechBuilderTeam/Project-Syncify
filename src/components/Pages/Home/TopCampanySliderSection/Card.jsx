import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ data }) => {
  const { image, title, label } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    //     <div className='w-[100%] bg-white shadow-xl border-solid border-2 border-gray-300'>
    //         <div>
    //             <img className='h-[250px] w-[100%] object-cover' src={image} alt="images" />
    //             <div className='flex flex-col gap-4 p-[20px]'>

    // <div>
    //     <h2 className='font-bold'>{title}</h2>
    // </div>

    // <div>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque placeat blanditiis.</p>
    // </div>

    //  {/** this div section show.when user hover card */}
    // <div className='items-center gap-2 hidden'>
    //     <p className='text-black' href="#">{label} </p> <span><FaArrowRight /></span>
    // </div>

    //             </div>
    //         </div>
    //     </div>

    <div
      className="relative border rounded-lg overflow-hidden shadow-lg transition duration-300 delay-150 ease-in-out transform hover:scale-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={title}
        className={`w-full ${isHovered ? "h-50" : "h-60"} object-cover`}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p
          className={`text-gray-700 ${
            isHovered ? "block" : "h-20 overflow-hidden mb-2"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          eaque placeat blanditiis.
        </p>
        {isHovered && (
          //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2">
          //     {label}
          //   </button>
          <div className="flex gap-2 items-center hover:text-cyan-600 dark:hover:text-[#8401A1] font-bold py-2 px-4 mt-2">
            <p className="">{label} </p>{" "}
            <span>
              <FaArrowRight />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
