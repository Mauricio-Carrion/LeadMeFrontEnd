import { Button } from "primereact/button";
import styles from "./menubutton.module.sass";

type MenuButtonProps = {
  children: React.ReactNode;
};

export default function MenuButton({
  children,
}: MenuButtonProps): React.ReactElement {
  return <Button className={styles.menubutton}>{children}</Button>;
}
