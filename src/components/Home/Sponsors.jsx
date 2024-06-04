import Marquee from "react-fast-marquee";
import Title from "../../pages/shared/Title";

const Sponsors = () => {
  const data = [
    {
      url: "https://i.ibb.co/WsDJzHR/11.png",
    },

    {
      url: "https://i.ibb.co/b5hkbyc/6.png",
    },
    {
      url: "https://i.ibb.co/jhJ2MtC/9.png",
    },
    {
      url: "https://i.ibb.co/WD4gsDc/hp.png",
    },
    {
      url: "https://i.ibb.co/W6JKz3S/8.png",
    },
  ];

  return (
    <div className="w-full  h-fit px-10 py-8 my-3">
      <Title title="Our Clients Who Uses Syncify Most" />
      <div className="flex items-center justify-center pt-10">
        <Marquee gradient={false} speed={100}>
     
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-opacity-50 p-10 rounded-md dark:shadow-slate-600 shadow-md mx-4"
            >
              <img src={item.url} alt="Sponsor" className="w-52 h-40 " />
            </div>
          ))}
        
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;
