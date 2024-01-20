import Image from "next/image";
import leadmeLogo from "../../../public/assets/svg/LeadMeLogo.svg";
import styles from "./leadmelogo.module.sass";

export default function LeadMeLogo(): React.ReactElement {
  return (
    <Image src={leadmeLogo} className={styles.leadmelogo} alt="LeadMe Logo" />
  );
}
