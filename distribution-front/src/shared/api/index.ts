import axios from "axios";

const API_URL = process.env.REACT_APP_HOST || "http://localhost:5050/api/v1"

const $api = axios.create({
    baseURL: API_URL
})


$api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default $api;