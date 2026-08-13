"use client";

import { useState } from "react";
import styles from "./SellerBanner.module.css";

type Seller = { id: number; name: string; email: string; bio: string | null };

export default function SellerBanner({ seller }: { seller: Seller }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className={styles.banner}>
      <div className={styles.avatar}>{seller.name.charAt(0)}</div>
      <div>
        <h1 className={styles.name}>{seller.name}</h1>
        <p className={styles.tagline}>{seller.bio || "Handcrafted Haven seller"}</p>
        <div className={styles.metaRow}>
          <button className={styles.followButton} onClick={() => setFollowing(!following)}>
            {following ? "Following ✓" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}