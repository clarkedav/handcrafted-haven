"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/types";
import styles from "./AddToCartButton.module.css";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem({
      id: product.id.toString(),
      name: product.name,
      price: `$${product.price}`,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button className={styles.cta} onClick={handleClick}>
      {added ? "Added ✓" : "Add to cart"}
    </button>
  );
}