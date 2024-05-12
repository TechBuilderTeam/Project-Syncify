

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#73e9fe] to-[#78118f] text-[#8401A1]">
            <div className="h-[85vh] flex flex-col justify-center items-center space-y-4 space-x-4 md:space-x-0">
                <div>
                    <h1 className="text-center text-5xl font-bold">
                        A smarter way to work
                    </h1>
                </div>
                <div>
                    <p className="text-sm md:text-lg text-center text-black font-semibold">
                        With ProjectSyncify, you can drive clarity and impact at scale by
                        connecting work and <br /> workflows to company-wide goals.
                    </p>
                </div>

                <div className="flex gap-5">
                    <a href="\login">
                        <button className="btn bg-[#8401A1] hover:bg-gradient-to-r from-[#30acc2] to-[#8401A1] text-white rounded-sm">
                            Get Started
                        </button>
                    </a>

                    <button className="px-4 py-2 border border-[#73e9fe] text-[#73e9fe] hover:bg-[#73e9fe] hover:text-[#8401A1] hover:font-bold rounded-sm">
                        See how it works
                    </button>
                </div>
            </div>

            <div >
                <svg
                    className="absolute bottom-0 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 220">
                    <path
                        className="fill-[#fff] dark:fill-[#000]"
                        fillOpacity={1}
                        d="M0,0L34.3,21.3C68.6,43,137,85,206,101.3C274.3,117,343,107,411,96C480,85,549,75,617,101.3C685.7,128,754,192,823,192C891.4,192,960,128,1029,112C1097.1,96,1166,128,1234,128C1302.9,128,1371,96,1406,80L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>

            </div>
        </div>
    );
};

export default Banner;