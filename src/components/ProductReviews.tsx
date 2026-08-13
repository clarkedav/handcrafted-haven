"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import styles from "./ProductReviews.module.css";

type Review = {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
};

export default function ProductReviews({ productId }: { productId: string }) {
  const { data: session } = useSession();
  console.log("session:", session);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loadReviews = useCallback(async () => {
    const res = await fetch(`/api/reviews?productId=${productId}`);
    const data = await res.json();
    setReviews(data);
  }, [productId]);

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  loadReviews();
}, [loadReviews]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, rating, comment }),
    });

    setSubmitting(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Something went wrong.");
      return;
    }

    setComment("");
    setRating(5);
    loadReviews();
  }

  const average =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Reviews {average && <span className={styles.average}>&#9733; {average} ({reviews.length})</span>}
      </h2>

      {session ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Rating
            <select
              className={styles.select}
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>{n} star{n > 1 ? "s" : ""}</option>
              ))}
            </select>
          </label>
          <textarea
            className={styles.textarea}
            placeholder="Share your thoughts about this product..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button className={styles.submitButton} type="submit" disabled={submitting}>
            {submitting ? "Posting..." : "Post review"}
          </button>
        </form>
      ) : (
        <p className={styles.loginPrompt}>
          <a href="/login">Log in</a> to leave a review.
        </p>
      )}

      <div className={styles.list}>
        {reviews.length === 0 && <p className={styles.empty}>No reviews yet — be the first!</p>}
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <span className={styles.reviewerName}>{review.user_name}</span>
              <span className={styles.reviewRating}>{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</span>
            </div>
            {review.comment && <p className={styles.reviewComment}>{review.comment}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}