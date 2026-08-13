import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <p className={styles.brand}>Handcrafted Haven</p>
          <p className={styles.tagline}>Handmade. Local. Sustainable.</p>
        </div>
        <div>
          <p className={styles.colHeading}>Shop</p>
          <Link href="/products">All products</Link>
          <Link href="/sellers">Our sellers</Link>
        </div>
        <div>
          <p className={styles.colHeading}>Company</p>
          <Link href="/about">About us</Link>
          <Link href="/signup">Become a seller</Link>
        </div>
        <div>
          <p className={styles.colHeading}>Contact</p>
          <p className={styles.contactText}>hello@handcraftedhaven.example</p>
          <p className={styles.contactText}>Rexburg, Idaho</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; Handcrafted Haven</p>
      </div>
    </footer>
  );
}