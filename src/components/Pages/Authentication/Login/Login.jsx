import axios from "axios";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxios from "../../../../hooks/useAxios";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
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

  const handleSignInWithGoogle = async (response) => {

    try{
       // console.log(response); // Logging the response for debugging
      console.log(response);
      const payload = response.credential
      console.log('payload', typeof payload)
      const server_res = await axios.post("https://projectsyncifyapi.onrender.com/api/v1/auth/google/", {"access_token": payload})
      console.log('server -> ',server_res)
      

      const user = {
        "email": server_res.data.email,
        "name": server_res.data.full_name,
        "userId": server_res.data.user_id 
      }

      if(server_res.status === 200){
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('access', JSON.stringify(server_res.data.access_token))
        localStorage.setItem('refresh', JSON.stringify(server_res.data.refresh_token))
        navigate("/dashboard");
        toast.success("login successfull")
      }   
    }
    catch(err){
       console.log('error from google -> ',err.response.status)
       if(err.response.status === 500){
        toast.warning("Server Error!!!")
       }
    }
    

  };

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
      console.log('response from login  -> ',response)
      setIsLoading(false)
      const user = {
        "email" : response.email,
        "names" : response.full_name,
        "userId" : response.user_id
      }
      if(res.status === 200){
        localStorage.setItem("user",JSON.stringify(user))
        localStorage.setItem('access',JSON.stringify(response.access_token))
        localStorage.setItem('refresh',JSON.stringify(response.refresh_token))
        navigate("/dashboard")
        toast.success(response.message)
      }
      console.log(response)
    }
  }

  useEffect(() => {
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
            Login
          </h1>
          <p className="mt-6 text-lg">Login with your social account</p>
          <div className="flex gap-4 mt-3">
          {/* <button  >
          <FcGoogle className="w-8 h-8" />
          </button> */}
          <div id='signInDiv'></div>
          <button>
          <FaGithub className="w-8 h-8" />
          </button>
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
            type="password"
            placeholder="Password"
            name="password"
            className=" outline-none border-2 w-full  px-8 py-4 bg-[#EEF5F3] rounded-full"
            value={logindata.password}
            onChange={handleChange}
          />
          <button
            className="mt-5 w-full  text-white py-3 rounded-full bg-gradient-to-r from-[#9d11bd] to-[#73e9fe] hover:from-[#73e9fe] hover:to-[#9d11bd]"
            style={{
              // background: "linear-gradient(135deg, #5AA6E1, #D939F5)",
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
          <p className="text-start"><NavLink to='/forget'>Forget Password</NavLink></p>
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
            <button className="hover:bg-gradient-to-r from-[#9d11bd] to-[#73e9fe] text-white font-bold  px-10 py-2 rounded-full  border-2">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
