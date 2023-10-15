import { useQuery } from "@tanstack/react-query";

import loader from "./Seasons.loader";

const Seasons = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["seasons"],
    queryFn: loader,
    staleTime: 10000,
  });

  console.log("data", data);
  console.log("isPending", isPending);
  console.log("isError", isError);
  console.log("error", error);

  return <div></div>;
};

export default Seasons;
