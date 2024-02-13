import { Avatar } from "primereact/avatar";
import styles from "./ContactItem.module.sass";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
export default function ContactItem() {
  return (
    <button className={styles.contactItem}>
      <Avatar
        style={{ marginRight: "5%" }}
        image="https://i.pravatar.cc/500"
        size="xlarge"
        shape="circle"
      />
      <h3 style={{ width: "15%" }}>Maurício Carrion</h3>
      <Divider layout="vertical" />
      <h3 style={{ width: "15%" }}>+55 11 99999-9999</h3>
    </button>
  );
}
