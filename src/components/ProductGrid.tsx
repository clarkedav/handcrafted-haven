import styles from "./ProductGrid.module.css";

const products = [
  { name: "Woven basket", price: "$32" },
  { name: "Ceramic mug", price: "$18" },
  { name: "Knit scarf", price: "$24" },
  { name: "Clay vase", price: "$45" },
  { name: "Beaded necklace", price: "$28" },
  { name: "Leather journal", price: "$36" },
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Featured products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.name} className={styles.card}>
            <div className={styles.imagePlaceholder} />
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}