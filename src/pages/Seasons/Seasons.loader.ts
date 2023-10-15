import { GenericAbortSignal } from "axios";

import AxiosInstance from "../../api/axios";
import CheckResponseForErrors from "../../helpers/CheckResponseForErrors";

export default async function loader({
  signal,
}: {
  signal: GenericAbortSignal;
}) {
  const response = await AxiosInstance.get("/seasons", { signal: signal });

  return CheckResponseForErrors(response).data;
}
