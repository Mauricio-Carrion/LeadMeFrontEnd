import { SiWhatsapp } from "react-icons/si";
import HeaderButton from "./components/HeaderButton/HeaderButton";
import styles from "./headerbuttons.module.sass";
import { MdNotifications } from "react-icons/md";

export default function HeaderButtons(): React.ReactElement {
  return (
    <div className={styles.headerbuttons}>
      <HeaderButton>
        <SiWhatsapp size={20} />
      </HeaderButton>
      <HeaderButton>
        <MdNotifications size={20} />
      </HeaderButton>
    </div>
  );
}
