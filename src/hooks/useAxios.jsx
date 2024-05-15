import axios from 'axios';
import dayjs from 'dayjs';

const baseURL = 'https://projectsyncifyapi.onrender.com/api/v1';

const createAxiosInstance = async () => {
    const token = localStorage.getItem('access') ? JSON.parse(localStorage.getItem('access')) : "";
    const refresh_token = localStorage.getItem('refresh') ? JSON.parse(localStorage.getItem('refresh')) : "";

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : null,
        },
    });

    axiosInstance.interceptors.request.use(async req => {
        if (token) {
            const jwtDecodeModule = await import('jwt-decode');
            const jwtDecode = jwtDecodeModule.default || jwtDecodeModule;

            const user = jwtDecode(token);
            const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

            if (!isExpired) {
                req.headers.Authorization = `Bearer ${token}`;
                return req;
            } else {
                try {
                    const res = await axios.post(`${baseURL}/auth/token/refresh/`, { refresh: refresh_token });

                    if (res.status === 200) {
                        localStorage.setItem('access', JSON.stringify(res.data.access));
                        req.headers.Authorization = `Bearer ${res.data.access}`;
                    } else {
                        await axios.post(`${baseURL}/auth/logout/`, { "refresh_token": refresh_token });
                        localStorage.removeItem('access');
                        localStorage.removeItem('refresh');
                        localStorage.removeItem('user');
                    }
                } catch (error) {
                    console.error("Token refresh error:", error);
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');
                    localStorage.removeItem('user');
                }
            }
        }
        return req;
    }, error => {
        return Promise.reject(error);
    });

    return axiosInstance;
};

const useAxios = () => {
    return createAxiosInstance();
};

export default useAxios;
