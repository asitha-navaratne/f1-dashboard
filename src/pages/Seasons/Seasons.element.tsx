import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import "./Seasons.css";

import { ProgressSpinner } from "primereact/progressspinner";
import { Dropdown } from "primereact/dropdown";

import loader from "./Seasons.loader";

const Seasons = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["seasons"],
    queryFn: loader,
    staleTime: 10000,
  });

  console.log(data, isPending, isError, error);

  if (isPending) {
    return (
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    );
  }

  return (
    <div>
      <div className="card">
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
        />
      </div>
    </div>
  );
};

export default Seasons;
