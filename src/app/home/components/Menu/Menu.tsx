import React from "react";
import styles from "./menu.module.sass";
import LeadMeLogo from "../../../../components/LeadMeLogo/LeadMeLogo";
import MenuButton from "@/app/home/components/MenuButton/Menubutton";
import { LogoutButton } from "@/app/home/components/LogoutButton/LogoutButton";
import {
  MdContactPhone,
  MdDashboard,
  MdEditCalendar,
  MdMessage,
} from "react-icons/md";
import { FaFileImport } from "react-icons/fa";

export default function Menu(): React.ReactElement {
  return (
    <div className={styles.menu}>
      <div className={styles.logodiv}>
        <LeadMeLogo />
      </div>
      <nav className={styles.buttons}>
        <MenuButton href="/home/dashboard" title="Dashboard">
          <MdDashboard size={24} />
        </MenuButton>
        <MenuButton href="/home/contacts" title="Contatos">
          <MdContactPhone size={24} />
        </MenuButton>
        <MenuButton href="/home/calendar" title="Calendário">
          <MdEditCalendar size={24} />
        </MenuButton>
        <MenuButton href="/home/messages" title="Mensagens">
          <MdMessage size={24} />
        </MenuButton>
        <MenuButton href="/home/import" title="Importar">
          <FaFileImport size={24} />
        </MenuButton>
        <LogoutButton />
      </nav>
    </div>
  );
}
