import { VscGraph } from "react-icons/vsc";

const Navbar = () => {
    return (
        <div className="mx-auto  p-4 bg-transparent"  >
            <div className="flex justify-between items-center gap-10">
            <div className="w-2/8  flex justify-between items-start gap-1" style={{ color: "#73e9fe" }}>
                <VscGraph className="text-4xl" />
                <h1 className="text-2xl  font-bold italic">Project Syncify</h1>
            </div>
            <div className="w-4/8 flex justify-start items-center gap-2 font-semibold" style={{ color: "#73e9fe" }}>
                <a href="solutions">Solutions</a>
                <a href="features">Features</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
                <a href="faq">FAQ</a>
                

            </div>
            <div className="w-1/8 flex justify-end">
                <hr className="w-[1px] h-[40px] bg-[#c2f0f8]"/>
            </div>
            
            <div  className="w-2/8 flex justify-between items-center gap-2 font-semibold" style={{ color: "#73e9fe" }}>
                <a href="contact">Contact Sales</a>
                <a href="login">Log In</a>
                <button className="px-4 py-2 bg-[#73e9fe] rounded text-[#f60792]">Get Started</button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;