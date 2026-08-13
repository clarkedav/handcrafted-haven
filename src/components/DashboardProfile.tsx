"use client";

import { useState } from "react";
import styles from "./DashboardProducts.module.css";

export default function DashboardProfile({ initialBio }: { initialBio: string }) {
  const [bio, setBio] = useState(initialBio);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio }),
    });
    setLoading(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className={styles.form}>
      <h2 className={styles.formHeading}>My bio &amp; story</h2>
      <label className={styles.label}>
        Tell buyers about yourself and your craft
        <textarea
          className={styles.textarea}
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="I've been hand-throwing pottery for..."
        />
      </label>
      <button className={styles.submitButton} onClick={handleSave} disabled={loading}>
        {loading ? "Saving..." : saved ? "Saved ✓" : "Save bio"}
      </button>
    </div>
  );
}