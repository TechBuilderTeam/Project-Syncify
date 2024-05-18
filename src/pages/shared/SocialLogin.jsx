import React, { useContext } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
// import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

const handleSignInWithGoogle = async (response) => {
    // console.log(response); // Logging the response for debugging
    console.log(response);
    const payload = response.credential
    console.log('payload', typeof payload)
    const server_res = await axios.post("https://projectsyncifyapi.onrender.com/api/v1/auth/google/", {"access_token": payload})
    console.log('server -> ',server_res)

    const user = {
      "email": server_res.data.email,
      "name": server_res.data.full_name 
    }

    if(server_res.status === 200){
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('access', JSON.stringify(server_res.data.access_token))
      localStorage.setItem('refresh', JSON.stringify(server_res.data.refresh))
    //   navigate("/dashboard");
      toast.success("login successfull")
    }

  };

const SocialLogin = () => {
    const {GoogleSignIn,GithubSignIn,user} = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        console.log("clicked google button")
        GoogleSignIn()
        .then(result =>{
            // const loggedInUser = result.user;
            // const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            // fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/users',{
            //         method: "POST",
            //         headers: {
            //             "content-type": 'application/json'
            //         },
            //         body: JSON.stringify(saveUser)
            //     })
            //         .then(res => res.json())
            //         .then(data =>{
            //                 navigate(form, {replace: true})
            //         })
            console.log('google sign in response -> ',result)
            
        })
    }

    const handleGithubSignIn = () => {
        console.log('github button clicked')
        console.log(GithubSignIn)
        GithubSignIn()
        .then(result =>{
            // const loggedInUser = result.user;
            // const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            // fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/users',{
            //         method: "POST",
            //         headers: {
            //             "content-type": 'application/json'
            //         },
            //         body: JSON.stringify(saveUser)
            //     })
            //         .then(res => res.json())
            //         .then(data =>{
            //                 navigate(form, {replace: true})
            //         })
            console.log('github sign in response -> ',result)
            
        })
    }


    return (
        <div className="flex gap-4 mt-3">
              <button onClick={handleSignInWithGoogle}>
                <FcGoogle className="w-8 h-8" />
              </button>
              <div id='signInDiv'></div>
              <button onClick={handleGithubSignIn}>
                <FaGithub className="w-8 h-8" />
              </button>
            </div>
    );
};

export default SocialLogin;