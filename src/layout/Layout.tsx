import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

import MainNavigation from "../components/MainNavigation";

const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
