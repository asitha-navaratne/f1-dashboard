import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://v1.formula-1.api-sports.io",
  timeout: 5000,
});

export default AxiosInstance;
