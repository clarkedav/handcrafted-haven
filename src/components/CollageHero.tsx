import Image from "next/image";
import styles from "./CollageHero.module.css";

const panels = [
  { src: "/images/pottery.png", alt: "Hands shaping pottery on a wheel" },
  { src: "/images/knit.png", alt: "Woman wearing a hand-knit cowl" },
  { src: "/images/woven-bags.png", alt: "Colorful hand-woven bags" },
  { src: "/images/jewelry.png", alt: "Layered handmade beaded necklaces" },
];

export default function CollageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.collage}>
        {panels.map((panel) => (
          <div key={panel.src} className={styles.panel}>
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.overlayText}>
        <h1 className={styles.headline}>Unique handcrafted treasures, made by hand</h1>
        <p className={styles.subtext}>Support artisans. Shop sustainably.</p>
        <button className={styles.cta}>Shop now</button>
      </div>
    </section>
  );
}