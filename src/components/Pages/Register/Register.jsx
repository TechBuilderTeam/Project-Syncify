import RegiAni from "../../../../public/RegAni.json";
import { TiArrowBackOutline } from "react-icons/ti";
import Lottie from "lottie-react";

const Register = () => {
  return (
    <div className="py-10 px-10 text-[#8401A1] dark:text-[#73e9fe]">
      <div className="flex gap-3 my-5 justify-center md:justify-normal items-center">
        <a href="/" className="text-2xl font-bold">
          <TiArrowBackOutline />
        </a>
        <a href="/" className="text-lg font-bold">
          Back to home
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 ">
          <Lottie
            animationData={RegiAni}
            loop={true}
            className="object-center"
            style={{ height: "400px" }}
          />
        </div>
        <div className="w-full md:w-1/2 border-2 rounded-lg">
          <div className="px-8 py-5">
            <h1 className="text-4xl font-bold">Register</h1>
            <form className="flex flex-col mt-5 ">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 px-4 py-2 border-2 outline-none rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 px-4 py-2 border-2 outline-none rounded-lg"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border-2 outline-none rounded-lg mt-5"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border-2 outline-none rounded-lg my-5"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 border-2 outline-none rounded-lg"
              />
              <button
                type="submit"
                className="mt-5 w-full  text-white py-3 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #5AA6E1, #D939F5)",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Sign up
              </button>
            </form>
            <h3 className="mt-4">
              Already have an account? Please{" "}
              <a href="#" className="underline">
                Sign in
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
