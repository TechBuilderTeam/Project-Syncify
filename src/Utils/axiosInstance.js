import axios from "axios";


const token = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : "";
const refresh_token = localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : "";

const baseURL = "https://projectsyncifyapi.onrender.com/api/v1";
const axiosInstance = axios.create({
    baseURL: baseURL,
    "Content-Type": "application/json",
    headers: {
        'Authorization' :localStorage.getItem('access')  ? `Bearer ${token}` : null
    }
})

export default axiosInstance 