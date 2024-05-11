const Banner = () => {
  return (
    <div className=" border-2">
      <div className="h-[400px] flex flex-col justify-center items-center space-y-5">
        <h1 className="text-center text-5xl font-bold">
          A smarter way to work
        </h1>
        <p className="text-lg text-center">
          With ProjectSyncify, you can drive clarity and impact at scale by
          connecting work and <br /> workflows to company-wide goals.
        </p>
        <div className="flex gap-5">
          <button className="btn btn-neutral dark:bg-[#73e9fe] text-white rounded-sm">
            Get Started
          </button>
          <button className="btn btn-outline btn-neutral rounded-sm">
            See how it works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
