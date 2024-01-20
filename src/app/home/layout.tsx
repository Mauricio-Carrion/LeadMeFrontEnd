import React from "react";
import styles from "./home.module.sass";
import Menu from "./components/Menu/Menu";
import UserInfo from "./components/UserInfo/UserInfo";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.homelayout}>
      <header className={styles.header}>
        <UserInfo />
      </header>
      <aside className={styles.menu}>
        <Menu />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
