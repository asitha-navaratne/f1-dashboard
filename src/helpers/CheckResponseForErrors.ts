import { AxiosResponse } from "axios";

import ApiCallException from "../errors/ApiException";

const CheckResponseForErrors = function (
  response: AxiosResponse
): AxiosResponse | never {
  if (response.data.errors.token) {
    throw new ApiCallException("Missing application key in API call.", 403);
  } else if (response.data.errors.endpoint) {
    throw new ApiCallException("Endpoint not found.", 404);
  }

  return response;
};

export default CheckResponseForErrors;
