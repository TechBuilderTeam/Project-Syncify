import { IoMailUnreadOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="pt-10 bg-gradient-to-r from-sky-200 dark:from-[#12195a] to-sky-100 dark:to-black font-bold">
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-16 py-10 ">
          <aside className="">
            <div className="flex flex-col justify-center items-center ">
              <img
                src={"https://i.ibb.co/T4FSNsb/Justlogo.png"}
                alt=""
                className="h-20"
              />
              <p className="text-xl font-bold text-center ">
                Project Syncify 
              
              </p>
              <p className="text-md font-semibold text-center mt-4">
              Providing reliable workflow services
              
              </p>
              <div className="text-sm font-semibold flex items-center gap-2" target="_blank">
              <IoMailUnreadOutline /> <a href="mailto:techbuildersteam@gmail.com">techbuildersteam@gmail.com</a>
            </div>
            </div>
          </aside>
          <div className="mt-10 md:mt-0">
            <h6 className="text-2xl font-extrabold">Services</h6>
           <div className="flex flex-col gap-2 md:gap-0 text-center mt-2 md:text-start">
           
            <a href="/workspace" className="link link-hover">
               Manage Projects
            </a>
            <a href="/profile" className="link link-hover">
              User Profile
            </a>

           </div>
          </div>
          <div className=" mt-10 md:mt-0">
            <h6 className="text-2xl font-extrabold">About us</h6>
          <div className="flex flex-col gap-2 md:gap-0 text-center mt-2 md:text-start">
          <a href="/features" className="link link-hover">
              Features
            </a>
            <a href="/contact" className="link link-hover">
              Contact </a>
          </div>
           
          </div>
          <div className="mt-10 md:mt-0 text-center md:text-start">
            <h6 className="text-2xl font-extrabold">Legal</h6>
            <div className="flex flex-col gap-2 md:gap-0 text-center mt-2 md:text-start">
            <a href="/terms&condition" className="link link-hover">
              Terms of use
            </a>
            <a href="/privacypolicy" className="link link-hover">
              Privacy policy
            </a>
            </div>
           
          </div>
        </div>
        <div className="px-10">
          <div className="flex flex-col justify-center items-center gap-2 pb-8 md:pt-2">
            <h3>© 2024 Project Syncify, Inc.</h3>
            {/* <h3>English</h3> */}
            <h3 className="text-sm font-semibold">
              A project management website by TECH BUILDERS Team.
            </h3>
           
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
