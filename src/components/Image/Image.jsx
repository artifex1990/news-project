import styles from "./Image.module.css";

export default function NewsBanner({ image }) {
  return (
    <div className={styles.wrapper}>
      {image && <img src={image} alt="news" className={styles.image} />}
    </div>
  );
}
