import styles from "./userinfo.module.sass";
import { Avatar } from "primereact/avatar";

export default function UserInfo(): React.ReactElement {
  return (
    <div className={styles.userinfo}>
      <div className={styles.username}>Maurício Carrion</div>
      <div className={styles.avatar}>
        <Avatar
          image={
            "https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"
          }
          className={styles.avatar}
          shape="circle"
          size="xlarge"
        />
      </div>
    </div>
  );
}
