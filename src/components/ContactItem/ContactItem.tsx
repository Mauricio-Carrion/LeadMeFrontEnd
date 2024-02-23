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
      <Avatar
        style={{ marginRight: "5%" }}
        image="https://i.pravatar.cc/500"
        size="xlarge"
        shape="circle"
      />
      <h3 style={{ width: "15%" }}>{fullname}</h3>
      <Divider layout="vertical" />
      <h3 style={{ width: "15%" }}>{phone}</h3>
    </button>
  );
}
