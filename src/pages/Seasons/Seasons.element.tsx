import { useQuery } from "@tanstack/react-query";

import loader from "./Seasons.loader";

const Seasons = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["seasons"],
    queryFn: loader,
    staleTime: 10000,
  });

  console.log(data, isPending, isError, error);

  return <div></div>;
};

export default Seasons;
