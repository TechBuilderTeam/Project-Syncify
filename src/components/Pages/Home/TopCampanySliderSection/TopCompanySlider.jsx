import { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { FaArrowRight } from "react-icons/fa";
import Title from "../../../../pages/shared/Title";

const TopCompanySlider = () => {
  const [progress, setProgress] = useState(0);

  const [slideToShow, setSlideToShow] = useState(4);

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    setSlides();
    setProgress(100 / (data.length - slideToShow + 1));
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, []);

  const data = [
    {
      id: 1,
      image:
        "https://assets.asana.biz/transform/f55aec7c-911f-4002-90cf-fa911835ac7b/card-overstock-asana-customer?io=transform:fill,width:1440&format=webp",
      title: "Overstock",
      paragraph:
        "Overstock, an online retailer specializing in furniture and home decor, leverages project management to streamline its operations and enhance customer satisfaction.",
    },
    {
      id: 2,

      image:
        "https://assets.asana.biz/transform/5162af5c-dc51-40b1-a6c5-762ac5893b0e/card-hubspot?io=transform:fill,width:1440&format=webp",
      title: "Hubspot",
      paragraph:
        "HubSpot is a leading provider of customer relationship management (CRM) software and marketing automation solutions, designed to help businesses grow.",
    },
    {
      id: 3,

      image:
        "https://assets.asana.biz/transform/df2510ec-14de-4e4e-80a1-cfe041bd142b/card-figma-asana-customer?io=transform:fill,width:1440&format=webp",
      title: "Figma",
      paragraph:
        "Figma is a powerful, cloud-based design tool that has revolutionized the way designers and teams collaborate on digital projects.",
    },
    {
      id: 4,

      image:
        "https://assets.asana.biz/transform/cc2baf08-d92c-4470-acbf-8859e5aa423a/card-sony-music-asana-customer?io=transform:fill,width:1440&format=webp",
      title: "Sony Music",
      paragraph:
        "Sony Music Entertainment is a global music conglomerate and one of the record labels, alongside Universal Music Group and Warner Music Group.",
    },
    {
      id: 5,

      image:
        "https://assets.asana.biz/transform/2fb67d4b-da8f-4720-a97e-194a511f4503/card-zoom-1x?io=transform:fill,width:1440&format=webp",
      title: "Zoom",
      paragraph:
        "Zoom, the popular video conferencing platform, integrates project management systems to enhance collaboration and productivity for its users. ",
    },
  ];

  var settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    afterChange: (current) => {
      setProgress((100 / (data.length - slideToShow + 1)) * (current + 1));
      console.log(slideToShow);
    },
  };
  return (
    <div className="w-full  h-fit px-10 py-10 my-6">
      {/* <h1 className='text-5xl mt-[50px] mb-[50px] '>The world’s top companies trust Synify</h1> */}
      <Title title="The world’s top companies trust Synify" />
      <div className="flex gap-2 items-center dark:hover:text-[#8401A1] hover:text-cyan-600 font-semibold py-2 px-4 mt-2">
        <p className="my-2">See all case studies </p>{" "}
        <span>
          <FaArrowRight />
        </span>
      </div>

      <div className="relative mb-20">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </Slider>

        {/** Progress bar.if we want show progress bar remove comments */}
        {/* <div className='h-[2px] bg-gray-300 w-[250px] absolute top-[520px] left-0'>
                     <div className='bg-[#fab1a0] absolute h-[100%] transition-all' style={{ width: `${progress}%`}}></div>
                 </div> */}
      </div>
    </div>
  );
};

export default TopCompanySlider;
