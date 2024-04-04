import { Avatar } from "primereact/avatar";
import styles from "./ContactItem.module.sass";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";

type ContactItemProps = {
  fullname: string;
  phone: string;
  onClick: () => void;
};
export default function ContactItem({
  fullname,
  phone,
  onClick,
}: ContactItemProps) {
  return (
    <button className={styles.contactItem}>
      <h3 style={{ width: "15%" }}>{fullname}</h3>
      <Divider layout="vertical" />
      <h3 style={{ width: "15%" }}>{phone}</h3>
    </button>
  );
}
