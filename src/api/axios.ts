import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://v1.formula-1.api-sports.io",
  timeout: 8000,
  headers: {
    "x-apisports-key": import.meta.env.VITE_APISPORTS_KEY,
  },
});

export default AxiosInstance;
