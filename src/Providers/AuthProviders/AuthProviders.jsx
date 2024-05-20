import React, { useEffect } from 'react';
import { createContext } from "react";
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from 'firebase/auth';
import app from "../../Firebase/Firebase.config";
import { useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const GoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const GithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

     //observe user auth state
     useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            
            console.log(currentUser)
            //get and set token
            if(currentUser){
                axios.post('https://bistro-boss-restaurant-server-lovat.vercel.app/jwt', {email: currentUser.email})
                .then(data => {
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            
        })

        return () =>{
            return unsubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        createUser,
        SignIn,
        GoogleSignIn,
        GithubSignIn,
        Logout,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

