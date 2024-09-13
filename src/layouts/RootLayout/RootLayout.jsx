import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./RootLayout.module.scss";

function RootLayout({ currentUser }) {
  return (
    <div className={styles.rootLayout}>
      <Header currentUser={currentUser} />

      <Outlet />
    </div>
  );
}

export default RootLayout;
