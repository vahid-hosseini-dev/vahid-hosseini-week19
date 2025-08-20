import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({ baseURL: apiUrl });

api.interceptors.request.use(
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

api.interceptors.response.use((response) => response);
(error) => {
  if (error.response) {
    const status = error.response.status;

    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      window.location.href = "login";
    }
    return Promise.reject(error);
  }
};
export default api;
