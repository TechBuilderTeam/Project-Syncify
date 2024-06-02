


import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleLogout = async ()=>{

        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        navigate('/login')
        toast.success("logout successful")

        // const refresh=JSON.parse(localStorage.getItem('refresh'))
        // console.log('refresh token -> ',refresh)
        // const res = await axiosInstance.post('auth/logout/', {'refresh_token':refresh})
        // console.log("response after login -> ", res)
        // if (res.status === 200) {
        //      localStorage.removeItem('access')
        //      localStorage.removeItem('refresh')
        //      localStorage.removeItem('user')
        //      navigate('/login')
        //      toast.success("logout successful")
        // }
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
        // console.log("user data show from authproviders -> ", user)
    },[])

    const AuthInfo = {
        user,
        handleLogout,
        loading,
        setLoading,
    }
    
    return (
        <AuthContext.Provider value= {AuthInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders;

