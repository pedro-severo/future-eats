import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3003',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        // Add any headers or authorization token here if needed
        return config;
    },
    // istanbul ignore next
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
