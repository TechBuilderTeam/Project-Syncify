import RegiAni from "../../../../../public/RegAni.json";
import { TiArrowBackOutline } from "react-icons/ti";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import SocialLogin from "../../../../pages/shared/SocialLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const axiosData = useAxios();
  const [imageUrl, setImageUrl] = useState("");
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const { email, first_name, last_name, password, password2, image } = formdata;

  const handleImageUpload = async (e) => {
    const imageFile = new FormData();
    imageFile.append("image", e.target.files[0]);

    try {
      const imageRes = await axios.post(image_upload_api, imageFile);
      const image_url = imageRes.data.data.url;
      setImageUrl(image_url);
      setFormdata({
        ...formdata,
        image: image_url,
      });
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !first_name || !last_name || !password || !password2 || !imageUrl) {
      alert("All fields are required");
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axiosData.post("/auth/register/", formdata);
      const response = res.data;
      if (res.status === 201) {
        toast.success("Please check email and provide OTP!!!");
        navigate("/otp/verify");
      }
    } catch (error) {
      console.log("Error -> ", error.response.data.email[0]);
      toast.warning(error.response.data.email[0]);
    }
  };

  const handleSignInWithGoogle = async (response) => {
    try {
      const payload = response.credential;
      const server_res = await axios.post("https://projectsyncifyapi.onrender.com/api/v1/auth/google/", { "access_token": payload });
      const user = {
        email: server_res.data.email,
        name: server_res.data.full_name,
        image: server_res.data.image,
      };

      if (server_res.status === 200) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("access", JSON.stringify(server_res.data.access_token));
        localStorage.setItem("refresh", JSON.stringify(server_res.data.refresh_token));
        navigate("/workspace");
        toast.success("Login successful");
      }
    } catch (err) {
      console.log("Error from Google -> ", err.response.status);
      if (err.response.status === 500) {
        toast.warning("Server side facing error");
      }
    }
  };

  let code = searchparams.get('code');
  useEffect(() => {
    console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);

    const userData = localStorage.getItem("user");
    console.log({ userData });

    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleSignInWithGoogle,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "circle",
        width: 200,
      }
    );
  }, [code]);

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
          <div className="text-center flex flex-col items-center">
            <p className="text-lg">Login with your social account</p>
            <div className="flex gap-4 mt-3">
              <div id='signInDiv'></div>
            </div>
            <span className="my-1 hidden md:flex">
              __________________________________or__________________________________
            </span>
          </div>
          <div className="px-8 py-3">
            <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 px-4 py-2 border-2 outline-none rounded-lg bg-slate-100 dark:bg-slate-900"
                  name="first_name"
                  value={first_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 px-4 py-2 border-2 outline-none rounded-lg bg-slate-100 dark:bg-slate-900"
                  name="last_name"
                  value={last_name}
                  onChange={handleChange}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border-2 outline-none rounded-lg mt-5 bg-slate-100 dark:bg-slate-900"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2 border-2 outline-none rounded-lg my-5 bg-slate-100 dark:bg-slate-900"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2 border-2 outline-none rounded-lg bg-slate-100 dark:bg-slate-900"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
              <input
                type="file"
                placeholder="Profile Picture"
                className="px-4 py-2 border-2 outline-none rounded-lg my-5 bg-slate-100 dark:bg-slate-900"
                name="image"
                onChange={handleImageUpload}
              />
              <button
                type="submit"
                className="mt-5 w-full text-white py-3 rounded-lg bg-gradient-to-r from-[#9d11bd] to-[#73e9fe] hover:from-[#73e9fe] hover:to-[#9d11bd]"
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
              <Link to="/login" className="underline">
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
