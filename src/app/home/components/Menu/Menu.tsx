import React from "react";
import styles from "./menu.module.sass";
import LeadMeLogo from "../../../../components/LeadMeLogo/LeadMeLogo";
import MenuButton from "@/components/MenuButton/Menubutton";
import { LogoutButton } from "@/components/LogoutButton/LogoutButton";

export default function Menu(): React.ReactElement {
  return (
    <div className={styles.menu}>
      <div className={styles.logodiv}>
        <LeadMeLogo />
      </div>
      <div className={styles.buttons}>
        <MenuButton>Menu</MenuButton>
        <MenuButton>Menu</MenuButton>
        <MenuButton>Menu</MenuButton>
        <MenuButton>Menu</MenuButton>
      </div>
    </div>
  );
}
