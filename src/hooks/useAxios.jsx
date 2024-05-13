import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: 'https://projectsyncifyapi.onrender.com/api/v1/auth',
    // baseURL: 'http://localhost:3000',
})
const useAxios = () => {
    return axiosPublic;
};

export default useAxios;