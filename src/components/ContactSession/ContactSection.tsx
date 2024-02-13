import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactSection.module.sass";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </section>
  );
}
