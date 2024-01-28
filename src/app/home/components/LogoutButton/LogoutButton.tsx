"use client";
import { Button } from "primereact/button";
import { MdExitToApp } from "react-icons/md";
import styles from "./logoutbutton.module.sass";
import Cookies from "js-cookie";

export function LogoutButton(): React.ReactElement {
  const handleLogout = () => {
    Cookies.remove("LeadMeToken");
    window.location.reload();
  };
  return (
    <Button
      onClick={() => handleLogout()}
      className={styles.logoutbutton}
      unstyled
    >
      <MdExitToApp size={34} />
    </Button>
  );
}
