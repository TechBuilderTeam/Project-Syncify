// import axios from "axios";
// import dayjs from "dayjs";
// import { jwtDecode } from "jwt-decode";


// const token = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : "";
// const refresh_token = localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : "";

// const baseURL = "https://projectsyncifyapi.onrender.com/api/v1";
// const axiosInstance = axios.create({
//     baseURL: baseURL,
//     "Content-Type": "application/json",
//     headers: {
//         'Authorization' :localStorage.getItem('access')  ? `Bearer ${token}` : null
//     }
// })

// axiosInstance.interceptors.request.use(async req =>{
//      if (token ){
//         req.headers.Authorization = `Bearer ${token}`
//         const user = jwtDecode(token)
//         const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
//         // console.log(isExpired)
//         if (!isExpired){
//             return req 
//         }else {
//             const res = await axios.post(`${baseURL}/auth/token/refresh/`, {refresh: refresh_token})
//             if (res.status){
//                 localStorage.setItem('access', JSON.stringify(res.data.access))
//                 req.headers.Authorization = `Bearer ${res.data.access}`
//                 return req
//             } else{
//                 const res = await axios.post(`${baseURL}/auth/logout/`, { "refresh" : refresh_token});
//                 if (res.status === 200) {
//                     localStorage.removeItem("access");
//                     localStorage.removeItem("refresh");
//                     localStorage.removeItem("user");
//                 }
//             }
//         }
//      }
//      return req
// })
// export default axiosInstance 



import axios from "axios";
// import jwt_decode from "jwt-decode";  
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";


let accessToken = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : "";
let refreshToken = localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : "";


console.log('access: ', accessToken);
const baseURL = 'https://projectsyncifyapi.onrender.com/api/v1/';


const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('access') ? `Bearer ${accessToken}` : ""
    }
});


axiosInstance.interceptors.request.use(async req => {
    if (accessToken) {
        req.headers.Authorization = localStorage.getItem('access') ? `Bearer ${accessToken}` : "";
        const user = jwtDecode(accessToken);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        if (!isExpired) return req;


        const resp = await axios.post(`${baseURL}auth/token/refresh/`, {
            refresh: refreshToken
        });


        console.log('new_access_token: ', resp.data.access);
        localStorage.setItem('access', JSON.stringify(resp.data.access));
        req.headers.Authorization = `Bearer ${resp.data.access}`;
        return req;
    } else {
        req.headers.Authorization = localStorage.getItem('token') ? `Bearer ${JSON.parse(localStorage.getItem('access'))}` : " ";
        return req;
    }
});


export default axiosInstance;
