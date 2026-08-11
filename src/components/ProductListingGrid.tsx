"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductFilters from "./ProductFilters";
import styles from "./ProductListingGrid.module.css";

export default function ProductListingGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className={styles.pageWrapper}>
      <ProductFilters active={activeCategory} onChange={setActiveCategory} />

      <div className={styles.wrapper}>
        <div className={styles.topBar}>
          <h1 className={styles.heading}>All products</h1>
          <select className={styles.sort}>
            <option>Sort: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className={styles.grid}>
          {filtered.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
              </div>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.price}>{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}