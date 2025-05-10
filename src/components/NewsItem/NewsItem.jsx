import { formateTimeAgo } from "../../helpers/formateTimeAgo";
import styles from "./NewsItem.module.css";

export default function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formateTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
