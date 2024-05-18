import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
<<<<<<< HEAD
=======
import axiosInstance from './../../../../Utils/axiosInstance';
import { toast } from 'react-toastify';
>>>>>>> origin/testing

const ResetPassword = () => {
    const navigate = useNavigate();
    const {uid, token} = useParams();
    const [newPasswords, setNewPasswords] = useState({
        password: '',
        confirm_password: ''
    })

    const handleChange = (e) => {
        setNewPasswords({...newPasswords, [e.target.name]: e.target.value})
    }

    const data = {
        'password': newPasswords.password,
        'confirm_password': newPasswords.confirm_password,
        'uidb64': uid,
        'token': token
    }

    const handleSubmit = async (e) => {
<<<<<<< HEAD

    }
    return (
        <div>
            <h2>Enter your Register Email Address</h2>
=======
        e.preventDefault()
        //make api call
        const response = await axiosInstance.patch('auth/set-new-password/', data)
        const result = response.data

        if(result.status === 200){
            navigate('/login');
            toast.success(response.message)
        }
        console.log(response)
    }
    return (
        <div>
            <h2>Enter your new password</h2>
>>>>>>> origin/testing
            <div className="wrapper">
            <form
                onSubmit={handleSubmit} 
                className="w-full md:w-1/2">
            
            <div className="flex flex-col mt-5 ">
            <input
                type="text"
                placeholder="New password"
                name="email"
                className=" outline-none border-2 w-full  mt-4 px-8 py-4 bg-[#EEF5F3]  rounded-full"
<<<<<<< HEAD
                value={email}
                onChange={(e) => setEmail(e.target.value)}
=======
                value={newPasswords.password}
                onChange={handleChange}
>>>>>>> origin/testing
            />
            <br />
            <input
                type="text"
                placeholder="Confirm Password"
                name="email"
                className=" outline-none border-2 w-full  mt-4 px-8 py-4 bg-[#EEF5F3]  rounded-full"
<<<<<<< HEAD
                value={email}
                onChange={(e) => setEmail(e.target.value)}
=======
                value={newPasswords.confirm_password}
                onChange={handleChange}
>>>>>>> origin/testing
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
<<<<<<< HEAD
                Send
=======
                Submit
>>>>>>> origin/testing
            </button>
            </div>
            </form>
            </div>
        </div>
    );
};

export default ResetPassword;