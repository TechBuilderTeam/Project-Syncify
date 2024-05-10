

const Sponsors = () => {
    const data = [
        {
            url: "https://i.ibb.co/MfVRkVv/5.png"
        },
        {
            url: "https://i.ibb.co/MGcp2wV/3.png"
        },
        {
            url: "https://i.ibb.co/b5hkbyc/6.png"
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold p-4  text-[#8401A1]">Our Clients Who Uses Syncify Most</h1>
            <div className="flex justify-center items-center gap-5 pt-10">
                {data.map((item, index) => (
                 <div key={index} className="w-90 bg-slate-100 p-10 rounded shadow-slate-50 shadow-xl">
                       <img
                        src={item.url}
                        alt="Sponsor"
                        className="w-60 h-40"
                    />
                 </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
