import Title from "../../pages/shared/Title";


const Sponsors = () => {
    const data = [
        {
            url: "https://i.ibb.co/MfVRkVv/5.png"
        },
       
        {
            url: "https://i.ibb.co/b5hkbyc/6.png"
        },
        {
            url: "https://i.ibb.co/jhJ2MtC/9.png"
        },
    ];

    return (
        <div className="w-full  h-fit px-10 py-10 my-6">
            {/* <h1 className="w-[70%] text-5xl mt-[50px] mb-[50px]">Our Clients Who Uses Syncify Most</h1> */}
            <Title title="Our Clients Who Uses Syncify Most"/>
          <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
                {data.map((item, index) => (
                 <div key={index} className="w-72  bg-opacity-50 p-10 rounded dark:shadow-slate-600 shadow-2xl">
                       <img
                        src={item.url}
                        alt="Sponsor"
                        className="w-60 h-40 "
                    />
                 </div>
                ))}
            </div>
          </div>
        </div>
    );
};

export default Sponsors;
