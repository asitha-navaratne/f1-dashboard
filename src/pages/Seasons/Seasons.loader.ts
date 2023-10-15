import AxiosInstance from "../../api/axios";

import CheckResponseForErrors from "../../helpers/CheckResponseForErrors";

export default async function loader() {
  const response = await AxiosInstance.get("/seasons");

  return CheckResponseForErrors(response).data;
}
