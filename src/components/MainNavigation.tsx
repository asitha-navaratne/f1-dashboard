import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

import seasons from "../assets/images/checkered-flag.png";
import teams from "../assets/images/finish-line.png";
import drivers from "../assets/images/helmet.png";
import races from "../assets/images/location.png";
import tracks from "../assets/images/race-track.png";

const MainNavigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles["active"] : undefined)}
      >
        <img src={seasons} alt="Seasons" className={styles["nav-link-image"]} />
      </NavLink>
      <NavLink
        to="/teams"
        className={({ isActive }) => (isActive ? styles["active"] : undefined)}
      >
        <img src={teams} alt="Teams" className={styles["nav-link-image"]} />
      </NavLink>
      <NavLink
        to="/drivers"
        className={({ isActive }) => (isActive ? styles["active"] : undefined)}
      >
        <img src={drivers} alt="Drivers" className={styles["nav-link-image"]} />
      </NavLink>
      <NavLink
        to="/races"
        className={({ isActive }) => (isActive ? styles["active"] : undefined)}
      >
        <img src={races} alt="Races" className={styles["nav-link-image"]} />
      </NavLink>
      <NavLink
        to="/tracks"
        className={({ isActive }) => (isActive ? styles["active"] : undefined)}
      >
        <img src={tracks} alt="Tracks" className={styles["nav-link-image"]} />
      </NavLink>
    </nav>
  );
};

export default MainNavigation;
