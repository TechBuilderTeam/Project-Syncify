// import React, { useContext } from 'react';
// import { FaGithub } from "react-icons/fa";
// import { BsFacebook } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
// // import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
// import { useLocation, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';

// const SocialLogin = () => {
//     const {GoogleSignIn,GithubSignIn,user} = useContext(AuthContext);
//     console.log(user)
//     const navigate = useNavigate();
//     const location = useLocation();

//     const form = location.state?.from?.pathname || "/";

//     const handleGoogleSignIn = () =>{
//         console.log("clicked google button")
//         GoogleSignIn()
//         .then(result =>{
//             // const loggedInUser = result.user;
//             // const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
//             // fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/users',{
//             //         method: "POST",
//             //         headers: {
//             //             "content-type": 'application/json'
//             //         },
//             //         body: JSON.stringify(saveUser)
//             //     })
//             //         .then(res => res.json())
//             //         .then(data =>{
//             //                 navigate(form, {replace: true})
//             //         })
//             console.log('google sign in response -> ',result)
            
//         })
//     }

//     const handleGithubSignIn = () => {
//         console.log('github button clicked')
//         console.log(GithubSignIn)
//         GithubSignIn()
//         .then(result =>{
//             // const loggedInUser = result.user;
//             // const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
//             // fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/users',{
//             //         method: "POST",
//             //         headers: {
//             //             "content-type": 'application/json'
//             //         },
//             //         body: JSON.stringify(saveUser)
//             //     })
//             //         .then(res => res.json())
//             //         .then(data =>{
//             //                 navigate(form, {replace: true})
//             //         })
//             console.log('github sign in response -> ',result)
            
//         })
//     }


//     return (
//         <div className="flex gap-4 mt-3">
//               <button onClick={handleGoogleSignIn}>
//                 <FcGoogle className="w-8 h-8" />
//               </button>
//               <div id='signInDiv'></div>
//               <button onClick={handleGithubSignIn}>
//                 <FaGithub className="w-8 h-8" />
//               </button>
//             </div>
//     );
// };

// export default SocialLogin;