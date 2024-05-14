import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const jwt_access = localStorage.getItem("access");
     useEffect(() => {
         if (jwt_access === null && !user){
            navigate("/login")
         }
     },[])
    
     console.log(user)
    return (
        <div className="w-full h-screen px-10 py-10">
            <h1 className="text-3xl text-center">hi {user && user?.names}</h1>
            <p>email: {user && user.email}</p>
        </div>
    );
};

export default Profile;