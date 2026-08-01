import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Handcrafted Haven logo" width={80} height={80} />
        <span className={styles.title}>Handcrafted Haven</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/products">Shop</Link>
        <Link href="/sellers/maren">Sellers</Link>
        <a href="#">About</a>
      </nav>
    </header>
  );
}