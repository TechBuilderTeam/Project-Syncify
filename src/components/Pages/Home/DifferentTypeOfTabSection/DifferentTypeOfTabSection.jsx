import React, { useState } from 'react';

import Marketing from './Marketing';
import Operations from './Operations';
import IT from './IT';
import Product from './Product';
import Company from './Company';
import Title from '../../../../pages/shared/Title';

const DifferentTypeOfTabSection = () => {
    const [showComponent, setShowComponent] = useState("Marketing");

    return (
        <div className='w-full  h-fit px-10 py-10 my-6'>
            {/* <h1 className='w-[70%] text-5xl mt-[50px] mb-[50px] '>See how different departments use Synify</h1> */}
            <Title title="See how different departments use Synify" />
            <div>
                <button onClick={() => setShowComponent("Marketing")} className={`border-solid border border-slate-400 rounded-full py-4 px-6 mx-2  text-sm hover:text-base ${showComponent === "Marketing" ? "bg-[#8401A1] text-white dark:bg-cyan-600" : ""}`}>Marketing</button>
                <button onClick={() => setShowComponent("Operations")} className={`border-solid border border-slate-400 rounded-full py-4 px-6 mx-2  text-sm hover:text-base ${showComponent === "Operations" ? "bg-[#8401A1] text-white dark:bg-cyan-600" : ""}`}>Operations</button>
                <button onClick={() => setShowComponent("IT")} className={`border-solid border border-slate-400 rounded-full py-4 px-6 mx-2  text-sm hover:text-base ${showComponent === "IT" ? "bg-[#8401A1] text-white dark:bg-cyan-600" : ""}`}>IT</button>
                <button onClick={() => setShowComponent("Product")} className={`border-solid border border-slate-400 rounded-full py-4 px-6 mx-2  text-sm hover:text-base ${showComponent === "Product" ? "bg-[#8401A1] text-white dark:bg-cyan-600" : ""}`}>Product</button>
                <button onClick={() => setShowComponent("Company")} className={`border-solid border border-slate-400 rounded-full py-4 px-6 mx-2  text-sm hover:text-base ${showComponent === "Company" ? "bg-[#8401A1] text-white dark:bg-cyan-600" : ""}`}>Company-wide</button>
            </div>

            {
                showComponent === "Marketing" ? <Marketing />
                    : showComponent === "Operations" ? <Operations /> : showComponent === "IT" ? <IT /> : showComponent === "Product" ? <Product /> : showComponent === "Company" ? <Company /> : "no component seleted"
            }
        </div>
    );
};

export default DifferentTypeOfTabSection;