import RegiAni from "../../../../../public/RegAni.json";
import { TiArrowBackOutline } from "react-icons/ti";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import SocialLogin from "../../../../pages/shared/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const axiosData = useAxios();
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",

  })


  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const { email, first_name, last_name, password, password2 } = formdata
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !first_name || !last_name || !password || !password2) {
      alert("All fields are required")
    }
    else if (password !== password2) {
      alert("Password does not match")
    }
    else {
      try {
        console.log('formdata->',formdata)
        const res = await axiosData.post("/auth/register/", formdata)
        const response = res.data
        console.log(response)
        console.log(response)
        if (res.status === 201) {
          toast.success(response.message)
          navigate("/otp/verify")

        }
      } catch (error) {
        console.log('error -> ',error)
      }
    }
  }

  const handleSignInWithGoogle = async (response) => {
    // console.log(response); // Logging the response for debugging
    console.log(response);
    const payload = response.credential
    console.log(payload);
    console.log('payload', typeof payload)
    const server_res = await axios.post("http://127.0.0.1:8000/api/v1/auth/google/", {"access_token": payload})
    console.log('server -> ',server_res)

    const user = {
      "email": server_res.data.email,
      "name": server_res.data.full_name 
    }

    if(server_res.status === 200){
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('access', JSON.stringify(server_res.data.access_token))
      localStorage.setItem('refresh', JSON.stringify(server_res.data.refresh))
      navigate("/dashboard");
      toast.success("login successfull")
    }

  };

useEffect(() => {
  // console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)
  //global google
  google.accounts.id.initialize({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Using client ID from environment variable
    callback: handleSignInWithGoogle // Callback function when sign-in completes
  });

   // Render the sign-in button
   google.accounts.id.renderButton(
    document.getElementById("signInDiv"), // Assuming there's an element with id 'signInDiv'
    {
      theme: "outline",
      size: "large",
      text: "continue_with",
      shape: "circle",
      width: 200 // Width should be a number, not a string
    }
  );
  
},[])

  return (
    <div className="py-10 px-10 ">
      <div className="flex gap-3 my-5 justify-center md:justify-normal items-center">
        <a href="/" className="text-2xl font-bold">
          <TiArrowBackOutline />
        </a>
        <a href="/" className="text-lg font-bold">
          Back to home
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 md:mt-20">
          <Lottie
            animationData={RegiAni}
            loop={true}
            className="object-center"
            style={{ height: "400px" }}
          />
        </div>
        <div className="w-full md:w-1/2  rounded-lg">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-[#8401A1] to-[#73e9fe] bg-clip-text py-3">
            Register
          </h1>
          <div className="text-center flex flex-col items-center" >
            <p className="text-lg">Login with your social account</p>
            
            <div className="flex gap-4 mt-3">
              <button >
                <FcGoogle className="w-8 h-8" />
              </button>
              <div id='signInDiv'></div>
              <button>
                <FaGithub className="w-8 h-8" />
              </button>
            </div>
            <SocialLogin/>

            <span className="my-1 hidden md:flex">
              __________________________________or__________________________________
            </span>
          </div>

          <div className="px-8 py-3">

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
                className="mt-5 w-full  text-white py-3 rounded-lg bg-gradient-to-r from-[#9d11bd] to-[#73e9fe] hover:from-[#73e9fe] hover:to-[#9d11bd]"
                style={{
              
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
              <Link to="\login" className="underline">
                Sign in
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
