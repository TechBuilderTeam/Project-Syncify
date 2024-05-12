import React from 'react';
import logo1 from "../../../../assets/logo1.png";
import logo2 from "../../../../assets/logo.jpg";
const CustomerSection = () => {
    return (
    <div className='bg-gradient-to-b from-[#73e9fe] to-[#78118f] w-full' >
        <div className='flex sm:flex-col md:flex-row flex-wrap m-6 py-6 relative' >
            {/** left side */}
            <div className="w-full md:w-4/6 p-8 flex flex-col justify-around">
                <div>
                    <h2 className="text-white text-4xl  font-bold mb-4">We love our customers and they love us too.</h2>
                    <p className="text-white ">We love our customers and they love us too. It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted.</p>
                    <div className="flex items-center my-2">
                    <img src={logo2} alt="Logo 1" className="w-6 h-6 rounded-full" />
                    <img src={logo1} alt="Logo 1" className="w-6 h-6 rounded-full" />
                    <img src={logo2} alt="Logo 1" className="w-6 h-6 rounded-full" />
                    <img src={logo1} alt="Logo 1" className="w-6 h-6 rounded-full" />
                    <span className='ml-4 text-white font-semibold'>+334 members</span>
                    
                </div>
                </div>

                <div className='my-2'>
                 <button className='border-solid border rounded-full py-2 px-6 mx-2 text-sm text-white hover:bg-gradient-to-b from-[#11528f] to-[#73e9fe]'>Learn More</button>
                </div>

            </div>
            
            {/** right side */}
            <div className='w-full md:w-2/6 p-4 relative'>

                <div className='flex w-full text-center '>
                    {/* Card 1 */}
                <div className="bg-white bg-opacity-20 m-4 p-8 rounded-lg shadow-lg w-1/2">
                    <h3 className="text-white text-xl font-bold mb-2">300</h3>
                    <p className='text-white font-semibold text-xl'>Tasks</p>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white bg-opacity-20 m-4 p-8 rounded-lg shadow-lg w-1/2">
                    <h3 className="text-white text-xl font-bold mb-2">80</h3>
                    <p className='text-white text-xl font-semibold'>Projects</p>
                </div>
                </div>

                <div className='w-full '>
                {/* Card 3 */}
                <div className="text-center bg-white bg-opacity-20 m-4 p-8 rounded-lg shadow-lg">
                    <h3 className="text-white text-xl font-bold mb-2">120</h3>
                    <p className='text-white text-xl font-semibold'>Members</p>
                </div>
                </div>

            </div>
        </div>
    </div>

    );
};

export default CustomerSection;