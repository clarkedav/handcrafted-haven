"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./CartIcon.module.css";

export default function CartIcon() {
  const { totalCount } = useCart();

  return (
    <Link href="/cart" className={styles.cartLink}>
      Cart
      {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
    </Link>
  );
}