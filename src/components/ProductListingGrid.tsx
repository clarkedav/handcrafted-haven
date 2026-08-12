"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductFilters from "./ProductFilters";
import styles from "./ProductListingGrid.module.css";

function priceToNumber(price: string) {
  return parseFloat(price.replace("$", ""));
}

export default function ProductListingGrid() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [prevCategoryFromUrl, setPrevCategoryFromUrl] = useState(categoryFromUrl);

  if (categoryFromUrl !== prevCategoryFromUrl) {
    setPrevCategoryFromUrl(categoryFromUrl);
    setActiveCategory(categoryFromUrl);
  }

  const [sortOption, setSortOption] = useState("featured");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "low-high") {
      return priceToNumber(a.price) - priceToNumber(b.price);
    }
    if (sortOption === "high-low") {
      return priceToNumber(b.price) - priceToNumber(a.price);
    }
    return 0;
  });

  return (
    <div className={styles.pageWrapper}>
      <ProductFilters active={activeCategory} onChange={setActiveCategory} />

      <div className={styles.wrapper}>
        <div className={styles.topBar}>
          <h1 className={styles.heading}>All products</h1>
          <select
            className={styles.sort}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="featured">Sort: Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <div className={styles.grid}>
          {sorted.map((product) => (
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