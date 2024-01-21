import Image from "next/image";
import styles from "./userinfo.module.sass";

export default function UserInfo(): React.ReactElement {
  return (
    <div className={styles.userinfo}>
      <div className={styles.username}>Maurício Carrion</div>
      <div className={styles.avatar}>
        <Image
          src="https://i.pravatar.cc/150?img=64"
          width={40}
          height={40}
          alt={"avatar"}
          className={styles.avatar}
        />
      </div>
    </div>
  );
}
