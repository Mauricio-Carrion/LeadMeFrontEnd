import styles from "./loader.module.sass";

type loaderProps = {
  color?: string;
  size?: number;
  top?: string;
  bottom?: string;
  position?: any;
};

export default function Loader({
  color = "#FFF",
  size,
  top,
  bottom,
  position,
}: loaderProps) {
  return (
    <span
      className={styles.loader}
      style={{
        borderColor: color,
        scale: size,
        top: top,
        bottom: bottom,
        position: position,
      }}
    ></span>
  );
}
