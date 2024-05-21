// import { VscGraph } from "react-icons/vsc";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
const Navbar = ({ handleThemeChange }) => {
    const {user, handleLogout} = useContext(AuthContext);
    console.log({user})
    const navlinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#8401A1] dark:text-[#73e9fe] font-bold"
                        : "text-[#8401A1] dark:text-[#73e9fe]"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/features"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#8401A1] dark:text-[#73e9fe] font-bold"
                        : "text-[#8401A1] dark:text-[#73e9fe]"
                }
            >
                Features
            </NavLink>
            <NavLink
                to="/solutions"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#8401A1] dark:text-[#73e9fe] font-bold"
                        : "text-[#8401A1] dark:text-[#73e9fe]"
                }
            >
                Solutions
            </NavLink>
            {/* <NavLink
            {/* <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#8401A1] dark:text-[#73e9fe] font-bold"
                        : "text-[#8401A1] dark:text-[#73e9fe]"
                }
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#8401A1] dark:text-[#73e9fe] font-bold"
                        : "text-[#8401A1] dark:text-[#73e9fe]"
                }
            >
                Register
            </NavLink> */}

            { user?.email &&
           <>  
              <NavLink
        to="/dashboard/profile"
        className={({ isActive }) =>
          isActive
            ? "text-[#8401A1] dark:text-[#73e9fe] font-bold underline underline-offset-3"
            : "text-[#8401A1] dark:text-[#73e9fe]"
        }
      >
        Dashboard
      </NavLink>
      {/* workspace dropdown  */}
           <div className="dropdown dropdown-bottom">
             <div
               tabIndex={0}
               role="button"
               className={({ isActive }) =>
                 isActive
                   ? "text-[#8401A1] dark:text-[#73e9fe] font-bold underline underline-offset-3"
                   : "text-[#8401A1] underline-offset-0 dark:text-[#73e9fe]"
               }
             >
               Project
             </div>
             <ul
               tabIndex={0}
               className="dropdown-content z-[1] menu p-2 shadow-2xl  rounded-box w-52"
             >
               <li>
                 <Link to="/workspace">View All</Link>
               </li>
               <li>
                 <a href="/createworkspace">Create New</a>
               </li>
             </ul>
           </div>

           </>
            }

   

      {/* dropdown 
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className={({ isActive }) =>
            isActive
              ? "text-[#8401A1] dark:text-[#73e9fe] font-bold underline underline-offset-3"
              : "text-[#8401A1] underline-offset-0 dark:text-[#73e9fe]"
          }
        >
          Project
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow-2xl  rounded-box w-52"
        >
          <li>
            <Link to="/workspace">View All</Link>
          </li>
          <li>
            <a href="/createworkspace">Create New</a>
          </li>
        </ul>
      </div> */}
    </>
  );

  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  

  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl p-4 ">
      <div className="flex justify-between items-center gap-10  backdrop-filter backdrop-blur-3xl mb-10 fixed top-0 left-0 z-50 w-full h-20 px-6">
        <div className="hidden lg:flex justify-between items-center w-full">
          {/** logo and name section */}
          <div className="w-1/4 flex justify-start items-center text-[#8401A1] dark:text-[#73e9fe]">
            <a href="/">
              <img
                src={"https://i.ibb.co/T4FSNsb/Justlogo.png"}
                className="w-14 h-12 text-[#8401A1] dark:text-[#73e9fe]"
                alt="logo"
              />
            </a>
            <a href="/">
              <h1 className="text-2xl  font-bold italic ">Project Syncify</h1>
            </a>
          </div>

          {/** nav list section */}
          <div className="w-2/4 flex justify-start items-center gap-4 font-semibold text-lg text-[#8401A1] dark:text-[#73e9fe]">
            {navlinks}
          </div>

          {/** toggle section */}
          <div className="w-1/4 flex justify-between items-center gap-1 text-[#8401A1] dark:text-[#73e9fe] font-semibold text-lg">
            <label className="swap swap-rotate ">
              <input type="checkbox" onChange={handleThemeChange} />

              <svg
                className="swap-on fill-current w-6 h-6 md:w-8 md:h-8 text-[#8401A1] dark:text-[#73e9fe]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-6 h-6 md:w-8 md:h-8 text-[#8401A1] dark:text-[#73e9fe]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <hr className="w-[3px] h-[36px] bg-[#8401A1] dark:bg-[#73e9fe]" />

            <a href="contact">Contact</a>
            {user ? <><div onClick={handleLogout}>LogOut</div></>: <Link to="/login">Log In</Link>}
            <Link to="/register">
              <button className="px-3 py-1 hidden md:flex bg-[#8401A1]  dark:bg-cyan-600 hover:bg-gradient-to-r from-[#30acc2] to-[#8401A1] rounded text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/** toggle bar button */}
        <div className="flex lg:hidden w-full">
          <div className="flex justify-between items-center w-full">
            <div className=" flex  text-[#8401A1] dark:text-[#73e9fe]">
              <a href="/">
                <img
                  src={"https://i.ibb.co/T4FSNsb/Justlogo.png"}
                  className="w-14 h-12 text-[#8401A1] dark:text-[#73e9fe]"
                  alt="logo"
                />
              </a>
              <a href="/">
                <h1 className="text-2xl  font-bold italic ">Project Syncify</h1>
              </a>
            </div>
            <div className="flex gap-2">
              <div className="font-extrabold">
                <label className="swap swap-rotate ">
                  <input type="checkbox" onChange={handleThemeChange} />

                  <svg
                    className="swap-on fill-current w-8 h-8 text-[#8401A1] dark:text-[#73e9fe]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-8 h-8 text-[#8401A1] dark:text-[#73e9fe]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              <hr className="w-[3px] h-[36px] bg-[#8401A1] dark:bg-[#73e9fe]" />
              <div onClick={toggleMenu}>
                {open ? (
                  <FaXmark className=" text-3xl cursor-pointer" />
                ) : (
                  <HiMenuAlt2 className=" text-3xl cursor-pointer" />
                )}
              </div>
              {/** conditional show navlist items */}
              <div
                className={`${
                  open ? "flex" : "hidden"
                } w-full h-fit bg-cyan-50 dark:bg-slate-800 bg-opacity-50 dark:bg-opacity-50 p-4 absolute top-[80px] left-0`}
              >
                <div className="flex flex-col justify-center items-center gap-4 w-full font-semibold ">
                  {navlinks}
                  <a href="contact">Contact</a>
                  <Link to="/login">Log In</Link>
                  {/* <button className="px-4 py-2 flex bg-[#8401A1]  dark:bg-cyan-600 hover:bg-gradient-to-r from-[#30acc2] to-[#8401A1] rounded text-white">Get Started</button> */}
                </div>
              </div>
            </div>

            {/** end toggle section and navlist for mobile device */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
