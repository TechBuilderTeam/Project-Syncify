import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-10 px-10 text-[#8401A1] dark:text-[#73e9fe]">
      <div className="flex gap-3 justify-center md:justify-normal items-center">
        <a href="/" className="text-2xl font-bold">
          <TiArrowBackOutline />
        </a>
        <a href="/" className="text-lg font-bold">
          Back to home
        </a>
      </div>
      <div className="min-h-[600px] md:min-h-[600px] flex flex-col md:flex-row justify-between gap-3 md:gap-5">
        <div className="w-full md:w-[60%] flex flex-col items-center justify-center md:p-0">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#8401A1] to-[#73e9fe] bg-clip-text py-3">
            Login to Your Account
          </h1>
          <p className="mt-6 text-lg">Login to your social account</p>
          <div className="flex gap-4 mt-3">
            <a href="#">
              <img
                src="../public/facebook.png"
                style={{ height: "50px" }}
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="../public/google.png"
                style={{ height: "50px" }}
                alt=""
              />
            </a>
          </div>
          <span className="my-5 hidden md:flex">
            __________________________________or__________________________________
          </span>
          <hr />
          <input
            type="text"
            placeholder="Email"
            className=" outline-none border-2 w-full md:w-[50%] mt-4 px-8 py-4 bg-[#EEF5F3]  rounded-full"
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            className=" outline-none border-2 w-full md:w-[50%] px-8 py-4 bg-[#EEF5F3] rounded-full"
          />
          <button
            className="mt-5 w-full md:w-[50%] text-white py-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #5AA6E1, #D939F5)",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        </div>
        <div
          className="w-full md:w-[40%] text-white flex flex-col justify-center items-center text-center gap-y-2 md:gap-y-3 px-10 py-24 rounded md:p-0"
          style={{
            background: "linear-gradient(135deg, #5AA6E1, #D939F5)",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">New Here ?</h1>
          <h3 className="text-lg md:text-xl md:px-16">
            Sign up and discover a grea amount of opportunities
          </h3>
          <Link to="/register">
            <button className=" bg-white text-black px-10 py-2 rounded-full  border-2">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
