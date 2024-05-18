import { useState } from "react";
import axiosInstance from "../../../../Utils/axiosInstance";
import { toast } from "react-toastify";


const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(email){
            const res = await axiosInstance.post("/auth/password-reset/", {"email": email})

            if(res.status === 200){
                toast.success('a link to reset your password has be sent to your email')
            }
<<<<<<< HEAD
        }

        setEmail("")
=======
            console.log(res)
            setEmail("")
        }

>>>>>>> origin/testing
    }

    return (
        <div>
            <h2>Enter your Register Email Address</h2>
            <div className="wrapper">
            <form
                onSubmit={handleSubmit} 
                className="w-full md:w-1/2">
            
            <div className="flex flex-col mt-5 ">
            <input
                type="text"
                placeholder="Email"
                name="email"
                className=" outline-none border-2 w-full  mt-4 px-8 py-4 bg-[#EEF5F3]  rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
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
                Send
            </button>
            </div>
            </form>
            </div>
        </div>
    );
};

export default ForgetPassword;