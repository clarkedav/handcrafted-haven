"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./DashboardProducts.module.css";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
};

const emptyForm = { name: "", price: "", category: "pottery", image: "", description: "" };

export default function DashboardProducts() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadProducts = useCallback(async () => {
    if (!session?.user?.id) return;
    const res = await fetch(`/api/products?sellerId=${session.user.id}`);
    const data = await res.json();
    setProducts(data);
  }, [session]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadProducts();
  }, [loadProducts]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const url = editingId ? `/api/products/${editingId}` : "/api/products";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Something went wrong.");
      return;
    }

    setForm(emptyForm);
    setEditingId(null);
    loadProducts();
  }

  function startEdit(product: Product) {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description || "",
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this listing? This can't be undone.")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    loadProducts();
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formHeading}>{editingId ? "Edit listing" : "Add a new listing"}</h2>

        <div className={styles.grid}>
          <label className={styles.label}>
            Product name
            <input
              className={styles.input}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>

          <label className={styles.label}>
            Price ($)
            <input
              className={styles.input}
              type="number"
              step="0.01"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
          </label>

          <label className={styles.label}>
            Category
            <select
              className={styles.input}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="pottery">Pottery &amp; ceramics</option>
              <option value="textile">Woven &amp; textile</option>
              <option value="jewelry">Jewelry</option>
              <option value="wood">Wood &amp; home</option>
            </select>
          </label>

          <label className={styles.label}>
            Product photo
            <input
              className={styles.input}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {form.image && (
          <Image src={form.image} alt="Preview" width={120} height={120} className={styles.preview} unoptimized />
        )}

        <label className={styles.label}>
          Description
          <textarea
            className={styles.textarea}
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.formActions}>
          <button className={styles.submitButton} type="submit" disabled={loading}>
            {loading ? "Saving..." : editingId ? "Save changes" : "Add listing"}
          </button>
          {editingId && (
            <button type="button" className={styles.cancelButton} onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className={styles.list}>
        {products.length === 0 && <p className={styles.empty}>You haven&apos;t listed any products yet.</p>}
        {products.map((product) => (
          <div key={product.id} className={styles.row}>
            <div className={styles.imageWrapper}>
              <Image src={product.image} alt={product.name} fill sizes="70px" style={{ objectFit: "cover" }} unoptimized />
            </div>
            <div className={styles.details}>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.meta}>${product.price} &middot; {product.category}</p>
            </div>
            <div className={styles.actions}>
              <button className={styles.editButton} onClick={() => startEdit(product)}>Edit</button>
              <button className={styles.deleteButton} onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}