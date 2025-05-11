import styles from "./Pagination.module.css";

export default function Pagination({
  totalPages,
  handlePageClick,
  handleNextPage,
  handlePreviousPage,
  currentPage,
}) {
  return (
    <div className={styles.pagination}>
      <button
        disabled={1 >= currentPage}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            key={index}
            disabled={index + 1 === currentPage}
            className={styles.pageNumber}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={totalPages <= currentPage}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
}
