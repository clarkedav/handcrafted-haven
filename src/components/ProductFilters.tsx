"use client";

import styles from "./ProductFilters.module.css";

const categories = [
  { id: "all", label: "All" },
  { id: "pottery", label: "Pottery & ceramics" },
  { id: "textile", label: "Woven & textile" },
  { id: "jewelry", label: "Jewelry" },
  { id: "wood", label: "Wood & home" },
];

export default function ProductFilters({
  active,
  onChange,
}: {
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <aside className={styles.filters}>
      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Category</h3>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.option} ${active === cat.id ? styles.active : ""}`}
            onClick={() => onChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </aside>
  );
}