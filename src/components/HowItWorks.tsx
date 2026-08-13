import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Artisans create a profile",
    text: "Makers sign up, share their story, and list the handcrafted goods they've made.",
  },
  {
    number: "02",
    title: "Buyers discover their work",
    text: "Shoppers browse by category, read each seller's story, and find pieces that feel meaningful.",
  },
  {
    number: "03",
    title: "A direct connection is made",
    text: "Every purchase goes straight to the artisan &mdash; no middleman, no mass production.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How Handcrafted Haven works</h2>
      <p className={styles.subheading}>Connecting makers and buyers, directly.</p>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.card}>
            <span className={styles.number}>{step.number}</span>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardText} dangerouslySetInnerHTML={{ __html: step.text }} />
          </div>
        ))}
      </div>
    </section>
  );
}