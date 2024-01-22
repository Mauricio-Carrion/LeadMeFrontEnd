"use client";
import styles from "./headerbuttons.module.sass";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import NotificationButton from "../NotificationButton/Notificationbutton";

export default function HeaderButtons(): React.ReactElement {
  return (
    <div className={styles.headerbuttons}>
      <WhatsAppButton />
      <NotificationButton />
    </div>
  );
}
