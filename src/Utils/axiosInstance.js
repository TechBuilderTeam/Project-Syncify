import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";


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

axiosInstance.interceptors.request.use(async req =>{
     if (token ){
        req.headers.Authorization = `Bearer ${token}`
        const user = jwtDecode(token)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
        // console.log(isExpired)
        if (!isExpired){
            return req 
        }else {
            const res = await axios.post(`${baseURL}/auth/token/refresh/`, {refresh: refresh_token})
            if (res.status){
                localStorage.setItem('access', JSON.stringify(res.data.access))
                req.headers.Authorization = `Bearer ${res.data.access}`
                return req
            } else{
                const res = await axios.post(`${baseURL}/auth/logout/`, { "refresh" : refresh_token});
                if (res.status === 200) {
                    localStorage.removeItem("access");
                    localStorage.removeItem("refresh");
                    localStorage.removeItem("user");
                }
            }
        }
        return req
     }
    }
)
export default axiosInstance 