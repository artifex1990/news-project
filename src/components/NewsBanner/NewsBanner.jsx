import { formateTimeAgo } from "../../helpers/formateTimeAgo";
import Image from "../Image/Image";
import styles from "./NewsBanner.module.css";

export default function NewsBanner({ item }) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />*{" "}
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formateTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
}
