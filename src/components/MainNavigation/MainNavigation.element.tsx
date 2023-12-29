import { FC } from "react";

import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

import seasons from "../../assets/images/checkered-flag.png";
import teams from "../../assets/images/racing-car.png";
import drivers from "../../assets/images/helmet.png";
import races from "../../assets/images/location.png";
import tracks from "../../assets/images/race-track.png";

const MainNavigation: FC = () => {
  const pages = [
    {
      title: "Seasons",
      url: "/",
      image: seasons,
    },
    {
      title: "Teams",
      url: "/teams",
      image: teams,
    },
    {
      title: "Drivers",
      url: "/drivers",
      image: drivers,
    },
    {
      title: "Races",
      url: "/races",
      image: races,
    },
    {
      title: "Tracks",
      url: "/tracks",
      image: tracks,
    },
  ];

  return (
    <nav>
      {pages.map((page) => (
        <NavLink
          key={page.title}
          to={page.url}
          className={({ isActive }) =>
            isActive ? styles["nav-link-active"] : styles["nav-link"]
          }
        >
          <img
            src={page.image}
            alt={page.title}
            className={styles["nav-link-image"]}
          />
        </NavLink>
      ))}
    </nav>
  );
};

export default MainNavigation;
