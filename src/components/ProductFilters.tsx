import styles from "./ProductFilters.module.css";

export default function ProductFilters() {
  return (
    <aside className={styles.filters}>
      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Category</h3>
        <button className={`${styles.option} ${styles.active}`}>
          Pottery &amp; ceramics
        </button>
        <button className={styles.option}>Woven &amp; textile</button>
        <button className={styles.option}>Jewelry</button>
        <button className={styles.option}>Wood &amp; home</button>
      </div>

      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Price range</h3>
        <div className={styles.priceTrack}>
          <div className={styles.priceFill} />
        </div>
        <p className={styles.priceLabel}>$0 &mdash; $75</p>
      </div>

      <button className={styles.applyButton}>Apply filters</button>
    </aside>
  );
}