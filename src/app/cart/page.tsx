"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.css";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem } = useCart();

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
const [checkedOut, setCheckedOut] = useState(false);

function handleCheckout() {
  setCheckedOut(true);
}
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>Your cart</h1>

        {items.length === 0 ? (
          <p className={styles.empty}>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.list}>
              {items.map((item) => (
                <div key={item.id} className={styles.row}>
                  <div className={styles.imageWrapper}>
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className={styles.details}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>{item.price} &times; {item.quantity}</p>
                  </div>
                  <button className={styles.remove} onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.totalRow}>
              {!checkedOut ? (
  <button className={styles.checkoutButton} onClick={handleCheckout}>
    Proceed to checkout
  </button>
) : (
  <p className={styles.confirmation}>
    ✓ Order placed! Thank you for supporting handmade artisans.
  </p>
)}
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}