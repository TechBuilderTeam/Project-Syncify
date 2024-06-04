import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Slider from "react-slick";
import NextArrow from "../Pages/Home/TopCampanySliderSection/NextArrow";
import PrevArrow from "../Pages/Home/TopCampanySliderSection/PrevArrow";
import Backarrow from "./Arrow/Backarrow";
import ForwardArrow from "./Arrow/ForwardArrow";

const ProjectSlider = () => {
    const [projects, setProjects] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://projectsyncifyapi.onrender.com/workspace/user/${user?.userId}/workspaces/`)
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error));
    }, [user?.userId]);

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        nextArrow:<Backarrow />,
        prevArrow:  <ForwardArrow />,
        slidesToShow: 4,
        slidesToScroll: 1,

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
    };

    return (
        <div className="px-10 md:px-32 py-10 ">
            <div className="mb-10">
                <h1 className="text-3xl font-bold">Projects</h1>
                <hr className="w-[110px] border-2 border-[#0c01a1]" />
            </div>


            <div className="relative mb-10">
                <Slider {...settings}>
                    {projects?.map(project => (
                        <div key={project?.id} className="w-[300px] mx-4 border-2 border-gray-300 dark:border-gray-900 rounded-lg py-6 px-8">
                            <h3 className="text-lg font-semibold">{project?.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-white"> <span className="font-semibold text-[#0c01a1] dark:text-sky-400 ">Manager : </span> {project?.workspace_manager_name}</p>
                            <p className="text-sm text-gray-600 dark:text-white"><span className="font-semibold text-[#0c01a1] dark:text-sky-400 ">Manager Email : </span>{project?.workspace_manager_email}</p>
                            <p className="text-sm text-gray-600 dark:text-white"><span className="font-semibold text-[#0c01a1] dark:text-sky-400 ">Member : </span>{project?.workspace_total_members}</p>
                        </div>
                    ))}
                </Slider>

            </div>

        </div>
    );
};

export default ProjectSlider;
