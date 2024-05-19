import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../Utils/axiosInstance";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const jwt_access = localStorage.getItem("access");

  useEffect(() => {
    if (jwt_access === null && !user) {
      navigate("/login");
    } else {
      getSomeData();
    }
  }, [jwt_access, user]);

  const refresh = JSON.parse(localStorage.getItem("refresh"));

  const getSomeData = () => {
    axios
      .get(
        `https://projectsyncifyapi.onrender.com/api/v1/user/details/${user.email}/`
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  const handleLogout = async () => {
    const res = await axiosInstance.post("/auth/logout/", {
      refresh_token: refresh,
    });
    if (res.status === 200) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user");

      toast.success(res.data.message);
      navigate("/login");
    }
  };

  return (
    <div className=" h-screen px-10 py-10">
      <h1 className="text-3xl text-center">hi {user && user?.names}</h1>
      <p>email: {user && user.email}</p>
      <button className="px-4 py-10" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
