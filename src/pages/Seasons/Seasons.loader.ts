import AxiosInstance from "../../api/axios";
// import { json } from "react-router-dom";

export default async function loader() {
  const response = await AxiosInstance.get("/seasons");

  return response;
}
