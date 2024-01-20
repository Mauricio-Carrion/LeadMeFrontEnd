"use client";
import { usePathname } from "next/navigation";
import styles from "./menubutton.module.sass";
import Link from "next/link";

type MenuButtonProps = {
  children: React.ReactNode;
  href: string;
  title?: string;
};

export default function MenuButton({
  children,
  href,
  title,
}: MenuButtonProps): React.ReactElement {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === href ? styles.activemenubutton : styles.menubutton
      }
      href={href}
      title={title}
    >
      {children}
      <span className={pathname === href ? styles.active : ""} />
    </Link>
  );
}
