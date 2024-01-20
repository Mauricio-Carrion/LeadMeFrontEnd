import { Button } from "primereact/button";
import { MdExitToApp } from "react-icons/md";
import styles from "./logoutbutton.module.sass";

export function LogoutButton(): React.ReactElement {
  return (
    <Button className={styles.logoutbutton} unstyled>
      <MdExitToApp size={34} />
    </Button>
  );
}
