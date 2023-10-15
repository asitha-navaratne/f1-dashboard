import AxiosInstance from "../../api/axios";

import ApiCallException from "../../errors/ApiException";

export default async function loader() {
  const response = await AxiosInstance.get("/seas");

  if (response.data.errors.token) {
    const error = new ApiCallException(
      "Missing application key in API call.",
      403
    );

    throw error;
  } else if (response.data.errors.endpoint) {
    const error = new ApiCallException("Endpoint not found.", 404);

    throw error;
  }

  return response.data;
}
