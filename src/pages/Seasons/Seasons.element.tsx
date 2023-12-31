import { FC, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Dropdown } from "primereact/dropdown";

import styles from "./Seasons.module.css";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner.element";

import loader from "./Seasons.loader";

const Seasons: FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["seasons"],
    queryFn: loader,
    staleTime: 10000,
  });

  console.log(data, isPending, isError, error);

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Dropdown
        value={selectedSeason}
        onChange={(e) => setSelectedSeason(e.value)}
        options={data}
        placeholder="Select a Season"
        className={`${styles["seasons"]} w-full md:w-14rem`}
      />
    </div>
  );
};

export default Seasons;
