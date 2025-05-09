import { formateTimeAgo } from "../../helpers/formateTimeAgo";
import styles from "./NewsBanner.module.css";

export default function NewsBanner({ item }) {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formateTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}
