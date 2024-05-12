import React from 'react';

const CustomerSection = () => {
    return (
      <div className="bg-pink-600 flex flex-wrap">
      {/* Left Side Text */}
      <div className="w-full md:w-3/5 p-8">
        <h2 className="text-white text-3xl font-bold mb-4">Your Brand's Message Here</h2>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      {/* Right Side with Background Image */}
      <div className="w-full md:w-2/5" style={{ backgroundImage: `url('https://micronet.work/demo/wp-content/uploads/2023/04/happy_girl.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-wrap justify-center">
            <div className='flex w-full'>
                {/* Card 1 */}
              <div className="bg-white bg-opacity-20 m-4 p-8 rounded-lg shadow-lg w-1/2">
                <h3 className="text-pink-600 text-xl font-bold mb-4">300</h3>
                <p>Tasks</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white bg-opacity-20 m-4 p-8 rounded-lg shadow-lg w-1/2">
                <h3 className="text-pink-600 text-xl font-bold mb-4">80</h3>
                <p>projects</p>
              </div>
            </div>
            
            <div className='w-full'>
              {/* Card 3 */}
              <div className="bg-white bg-opacity-20 m-4 p-8 rounded-lg shadow-lg">
                <h3 className="text-pink-600 text-xl font-bold mb-4">120</h3>
                <p>Members</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default CustomerSection;