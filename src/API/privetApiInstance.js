import axios from "axios";
import { baseURL } from "../constants/domain";

const privetApiInstance = axios.create({ baseURL });
privetApiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token !== null && token !== undefined) {
    console.log("enter interceptors area");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
privetApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);
export default privetApiInstance;
