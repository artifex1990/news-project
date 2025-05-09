import { formateDate } from "../../helpers/formateDate";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>News</h1>
      <p className={styles.date}>{formateDate(new Date())}</p>
    </header>
  );
}
