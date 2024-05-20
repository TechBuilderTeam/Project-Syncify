// import React, { useEffect } from 'react';
// import { createContext } from "react";
// import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from 'firebase/auth';
// import app from "../../Firebase/Firebase.config";
// import { useState } from 'react';
// import axios from 'axios';

import { createContext, useEffect, useState } from "react";
import axiosInstance from "../../Utils/axiosInstance";
import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProviders = ({children}) => {

//     const [user,setUser] = useState('');
//     const [loading,setLoading] = useState(true);

//     const provider = new GoogleAuthProvider();
//     const githubProvider = new GithubAuthProvider();
    
//     const createUser = (email,password) =>{
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth,email,password)
//     }

//     const SignIn = (email,password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth,email,password);
//     }

//     const GoogleSignIn = () =>{
//         setLoading(true);
//         return signInWithPopup(auth,provider);
//     }

//     const GithubSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, githubProvider)
//     }

//     const Logout = () =>{
//         setLoading(true)
//         return signOut(auth);
//     }

//     const updateUserProfile = (name,photo) =>{
//         setLoading(true)
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         });
//     }

//      //observe user auth state
//      useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
            
//             console.log(currentUser)
//             //get and set token
//             if(currentUser){
//                 axios.post('https://bistro-boss-restaurant-server-lovat.vercel.app/jwt', {email: currentUser.email})
//                 .then(data => {
//                     console.log(data.data.token)
//                     localStorage.setItem('access-token', data.data.token)
//                     setLoading(false);
//                 })
//             }
//             else{
//                 localStorage.removeItem('access-token')
//             }

            
//         })

//         return () =>{
//             return unsubscribe();
//         }
//     },[])

//     const AuthInfo = {
//         user,
//         loading,
//         createUser,
//         SignIn,
//         GoogleSignIn,
//         GithubSignIn,
//         Logout,
//         updateUserProfile
//     }

//     return (
//         <AuthContext.Provider value={AuthInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;

// import React, { useEffect } from 'react';
// import { createContext } from "react";
// import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from 'firebase/auth';
// import app from "../../Firebase/Firebase.config";
// import { useState } from 'react';
// import axios from 'axios';
// import { useRouteLoaderData } from 'react-router-dom';



// const auth = getAuth(app);

// const AuthProviders = ({children}) => {

//     const [user,setUser] = useState(null);
//     const [loading,setLoading] = useState(true);


//      //observe user auth state
//      useEffect( () =>{
//         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
            
//             console.log(currentUser)
//             //get and set token
//             if(currentUser){
//                 axios.post('https://bistro-boss-restaurant-server-lovat.vercel.app/jwt', {email: currentUser.email})
//                 .then(data => {
//                     console.log(data.data.token)
//                     localStorage.setItem('access-token', data.data.token)
//                     setLoading(false);
//                 })
//             }
//             else{
//                 localStorage.removeItem('access-token')
//             }

            
//         })
    
       


//         return () =>{
//             return unsubscribe();
//         }
//     },[])

//     const AuthInfo = {
//         user,
//         loading,
//         createUser,
//         SignIn,
//         GoogleSignIn,
//         GithubSignIn,
//         Logout,
//         updateUserProfile
//     }

//     return (
//         <AuthContext.Provider value={AuthInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProviders;


export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const handleLogout = async ()=>{

        const refresh=JSON.parse(localStorage.getItem('refresh'))
        console.log('refresh token -> ',refresh)
        const res = await axiosInstance.post('auth/logout/', {'refresh_token':refresh})
        console.log("response after login -> ", res)
        if (res.status === 200) {
             localStorage.removeItem('access')
             localStorage.removeItem('refresh')
             localStorage.removeItem('user')
             localStorage.removeItem('userId')
             navigate('/login')
             toast.warning("logout successful")
        }
      }


    useEffect(() => {
        const unsubscribe = () => {
            const userData = localStorage.getItem("user");

            if(userData){
                try {
                    const userObject = JSON.parse(userData)
                    setUser(userObject)
                } catch (error) {
                    console.log(error)
                }
            }
            else{
                setUser(null)
            }
        }

        unsubscribe()
    },[])

    const AuthInfo = {
        user,
        handleLogout,
    }
    
    return (
        <AuthContext.Provider value= {AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders;

