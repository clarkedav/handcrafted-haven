import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import AuthStatus from "./AuthStatus";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.svg" alt="Handcrafted Haven logo" width={80} height={80} />
          <span className={styles.title}>Handcrafted Haven</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/products">Shop</Link>
          <Link href="/sellers">Sellers</Link>
          <Link href="/about">About</Link>
          <CartIcon />
          <AuthStatus />
        </nav>
      </div>
      <nav className={styles.categoryNav} aria-label="Product categories">
        <Link href="/products?category=pottery">Pottery &amp; Ceramics</Link>
        <Link href="/products?category=textile">Woven &amp; Textile</Link>
        <Link href="/products?category=jewelry">Jewelry</Link>
        <Link href="/products?category=wood">Wood &amp; Home</Link>
        <Link href="/products">All Products</Link>
      </nav>
    </header>
  );
}