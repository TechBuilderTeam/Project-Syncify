import axios from "axios";
import { useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../../../../hooks/useAxios";
const Login = () => {
  const axiosData = useAxios();
  const navigate = useNavigate();
  const [logindata , setLogindata] = useState({
    email : "",
    password : ""
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setLogindata({
      ...logindata,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {email , password} = logindata
    if(!email || !password){
      setError("All fields are required")
    }
    else{
      setIsLoading(true)
      const res = await axiosData.post("/auth/login/",logindata)
      const response = res.data
      console.log(response)
      setIsLoading(false)
      const user = {
        "email" : response.email,
        "names" : response.full_name
      }
      if(res.status === 200){
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem('access',JSON.stringify(response.access_token))
        localStorage.setItem('refresh',JSON.stringify(response.refresh_token))

        toast.success(response.message)
        navigate("/profile")
      }
      console.log(response)
    }
  }
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
          <form
            onSubmit={handleSubmit} 
            className="w-full md:w-1/2">
           
          <div className="flex flex-col mt-5 ">
          <input
            type="text"
            placeholder="Email"
            name="email"
            className=" outline-none border-2 w-full  mt-4 px-8 py-4 bg-[#EEF5F3]  rounded-full"
            value={logindata.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            name="password"
            className=" outline-none border-2 w-full  px-8 py-4 bg-[#EEF5F3] rounded-full"
            value={logindata.password}
            onChange={handleChange}
          />
          <button
            className="mt-5 w-full  text-white py-3 rounded-full"
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
          </form>
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
