import { useLoaderData } from "react-router-dom";

const Seasons = () => {
  const data = useLoaderData();

  console.log(data);

  return <div></div>;
};

export default Seasons;
