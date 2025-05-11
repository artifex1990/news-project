import styles from "./Search.module.css";

export default function Search({ keywords, setKeywords }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
