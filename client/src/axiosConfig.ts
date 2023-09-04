import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  // baseURL: process.env.VITE_APP_SERVER_URL,
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
