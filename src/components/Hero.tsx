import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1 className={styles.headline}>
          Unique handcrafted treasures, made by hand
        </h1>
        <p className={styles.subtext}>
          Support artisans. Shop sustainably.
        </p>
        <button className={styles.cta}>Shop now</button>
      </div>
      <div className={styles.imagePlaceholder}>Hero image</div>
    </section>
  );
}