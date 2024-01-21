import { Button } from "primereact/button";
import styles from "./headerbutton.module.sass";

type HeaderButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function HeaderButton({
  children,
  onClick,
}: HeaderButtonProps): React.ReactElement {
  return (
    <Button className={styles.headerbutton} onClick={onClick} unstyled>
      {children}
    </Button>
  );
}
