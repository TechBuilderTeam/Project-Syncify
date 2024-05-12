import Lottie from "lottie-react";
import Animate from "../../../../../public/emailanimate.json";

const HomeEmailSection = () => {
    return (
        <div className="w-full h-fit px-1 md:px-40 py-10 my-6">
            <div className="bg-gradient-to-r from-[#73e9fe] to-[#8401A1] dark:from-[#8401A1] dark:to-[#73e9fe] w-full h-[600px] md:h-[500px] rounded-2xl" >
                <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
                    <div className="w-1/2 flex flex-col justify-center items-start pr-10 md:pr-0 md:pl-20">
                        <h1 className="text-4xl md:text-5xl font-bold">Nice to meet you!</h1>
                        <p className="text-lg my-4">Get started with Synify today. And explore some excited features for keeping your team on track.</p>
                        <div className="mt-2 w-full flex bg-white rounded">
                            <input type="text" placeholder="Enter your email" className="px-16 py-4 text-lg bg-white rounded rounded-r-none " />
                            <button className="py-4 bg-white dark:text-cyan-600 rounded rounded-l-none">Get Started</button>
                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <Lottie animationData={Animate} loop={true} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeEmailSection;