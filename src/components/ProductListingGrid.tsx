import Image from "next/image";
import styles from "./ProductListingGrid.module.css";

const products = [
  { name: "Woven basket", price: "$32" },
  { name: "Ceramic mug", price: "$18" },
  { name: "Knit scarf", price: "$24" },
  { name: "Clay vase", price: "$45" },
  { name: "Beaded necklace", price: "$28" },
  { name: "Leather journal", price: "$36" },
  { name: "Wood carving", price: "$52" },
  { name: "Soy candle", price: "$14" },
  { name: "Wool blanket", price: "$68" },
];

export default function ProductListingGrid() {
  return (
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
        {products.map((product) => (
          <div key={product.name} className={styles.card}>
            <div className={styles.imagePlaceholder} />
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <span className={styles.pageActive}>1</span>
        <span>2</span>
        <span>3</span>
        <span>&rsaquo;</span>
      </div>
    </div>
  );
}