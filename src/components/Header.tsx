import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Handcrafted Haven</div>
      <nav className={styles.nav}>
        <a href="#">Shop</a>
        <a href="#">Sellers</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}