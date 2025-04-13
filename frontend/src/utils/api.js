import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

export default API;
