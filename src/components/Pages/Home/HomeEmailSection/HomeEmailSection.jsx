import Lottie from "lottie-react";
import Animate from "../../../../../public/emailanimate.json";

const HomeEmailSection = () => {
    return (
        <div className="w-full h-fit px-4 md:px-40 py-10 my-6">
            <div className="bg-gradient-to-b from-[#9d11bd] to-[#73e9fe] md:bg-gradient-to-r md:from-[#73e9fe] md:to-[#8401A1] dark:md:from-[#8401A1] dark:md:to-[#73e9fe] w-full rounded-2xl px-4 dark:text-[#8401A1] dark:md:text-[#73e9fe]">


                <div className="flex flex-col-reverse md:flex-row justify-center items-center pb-20 md:pb-10">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-20 pl-10 md:px-0">
                        <h1 className="text-4xl md:text-7xl font-bold ">Nice to meet you!</h1>
                        <p className="text-lg my-4 pr-10">Get started with Synify today. And explore some excited features for keeping your team on track.</p>
                        <div className="mt-6 w-[90%] md:w-full flex justify-between bg-white rounded">
                            <input type="text" placeholder="Enter your email" className="px-8 md:px-16 py-2 md:py-4 text-lg bg-white rounded rounded-r-none " />
                            <button className="py-2 md:py-4 pr-4 md:pr-8  bg-white dark:text-cyan-600 rounded rounded-l-none font-bold">Send</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <Lottie animationData={Animate} loop={true} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeEmailSection;