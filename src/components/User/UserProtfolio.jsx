import axios from "axios";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaPlus } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillTwitterCircle } from "react-icons/ai"
import { ImProfile } from "react-icons/im";

const UserProtfolio = ({user, portfolio, reload, setReload}) => {
    console.log({user,portfolio})
    const [protfolioAdd, setProtfolioAdd] = useState();

    const [formData, setFormData] = useState({
        github: '',
        linkedin: '',
        portfolio: '',
        twitter: '',
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleModalClose = () => {
        document.getElementById('UserProtfolio').close();
    }

    const handleAddPortfolio = async (e) => {

        e.preventDefault();

    
        const userPortfolio = {
            github: formData.github || portfolio[0]?.github,
            linkedin: formData.linkedin || portfolio[0]?.linkedin,
            portfolio: formData.portfolio || portfolio[0]?.portfolio,
            twitter: formData.twitter || portfolio[0]?.twitter,
            user: user?.userId
         }
         
         
       
       console.log({userPortfolio})
    
       
    
        try {
          const result = await axios.post(`https://projectsyncifyapi.onrender.com/api/v1/profile/portfolio/`, userPortfolio)
          console.log({result});
    
          toast.success("update successfully")
          setReload(!reload)
          handleModalClose()
        } catch (error) {
          console.log('error from designation -> ', error)
        }
    
      };


    return (
        <div className="  px-10 md:px-32 py-10 ">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-3xl font-bold">Protfolio</h1>
                    <hr className="w-full border-2 border-[#0c01a1]" />
                </div>
                <button className=" text-4xl   font-bold rounded" title="Add Protfolio" onClick={() => document.getElementById('UserProtfolio').showModal()}>
                    <FaPlus />
                </button>
            </div>
            <dialog id="UserProtfolio" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white dark:bg-black">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("UserProtfolio").close()}>✕</button>
                    <h3 className="font-bold text-2xl mb-4 text-center dark:text-[#73e9fe] text-[#0c01a1] ">Add Protfolio</h3>
                    <form onSubmit={handleAddPortfolio}>

                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <FaGithub className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleInputChange}
                                    placeholder="github url"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>
                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <FaLinkedin className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleInputChange}
                                    placeholder="Linkedin Url"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>
                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <ImProfile className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="portfolio"
                                    value={formData.portfolio}
                                    onChange={handleInputChange}
                                    placeholder="Portfolio URL"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>
                        <div className="from-control">
                            <div className="flex gap-2">
                                <label className="label mb-2">
                                    <AiFillTwitterCircle className="w-8 h-8" /></label>
                                <input
                                    type="url"
                                    name="twitter"
                                    value={formData.twitter}
                                    onChange={handleInputChange}
                                    placeholder="Twitter URL"
                                    className="input  w-full bg-white dark:bg-black"
                                />
                            </div>
                        </div>

                        <div className="modal-action">
                            <button type="submit" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-[#0c01a1] text-white  font-bold rounded w-full ">Add</button>
                        </div>
                    </form>
                </div>
            </dialog>

            <div className="flex gap-4">
                {portfolio[0]?.github && (
    <Link to={portfolio[0].github} target="_blank">
        <FaGithub className="w-8 h-8" />
    </Link>
                )}
                {portfolio[0]?.linkedin && (
                <Link to={portfolio[0].linkedin} target="_blank">
                    <FaLinkedin className="w-8 h-8" />
                </Link>
                )}
                {portfolio[0]?.portfolio && (
                <Link to={portfolio[0].portfolio} target="_blank">
                    <ImProfile className="w-8 h-8" />
                </Link>
                )}
                {portfolio[0]?.twitter && (
                <Link to={portfolio[0].twitter} target="_blank">
                    <ImProfile className="w-8 h-8" />
                </Link>
                )}

            </div>
        </div>
    );
};

export default UserProtfolio;