import RegiAni from "../../../../../public/RegAni.json";
import { TiArrowBackOutline } from "react-icons/ti";
import Lottie from "lottie-react";
import { useState } from "react";
// import useAxios from "../../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  // const axiosData = useAxios();
  const [formdata, setFormdata] = useState({
    email : "",
    first_name : "",
    last_name : "",
    password : "",
    password2 : "",

  })
  

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }
  const {email,first_name,last_name,password,password2} = formdata
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!email || !first_name || !last_name || !password || !password2){
     alert("All fields are required")
    }
    else if(password !== password2){
      alert("Password does not match")
    }
    else{
     const res = await axios.post("https://projectsyncifyapi.onrender.com/api/v1/auth/register/",formdata)
     const response = res.data
     console.log(response)
     if(res.status === 201){
      toast.success(response.message)
      navigate("/otp/verify")
      
     }
    }
   console.log(formdata)
  }

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
            <form className="flex flex-col mt-5 " onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row justify-between gap-4  ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 px-4 py-2 border-2 outline-none rounded-lg bg-slate-100 dark:bg-slate-900 "
                  name="first_name"
                  value={first_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 px-4 py-2 border-2 outline-none rounded-lg bg-slate-100 dark:bg-slate-900 "
                  name="last_name"
                  value={last_name}
                  onChange={handleChange}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border-2 outline-none rounded-lg mt-5 bg-slate-100 dark:bg-slate-900 "
                name="email"
                value={email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border-2 outline-none rounded-lg my-5 bg-slate-100 dark:bg-slate-900 "
                name="password"
                value={password}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 border-2 outline-none rounded-lg bg-slate-100 dark:bg-slate-900 "
                name="password2"
                onChange={handleChange}
                value={password2}
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
              <a href="\login" className="underline">
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
