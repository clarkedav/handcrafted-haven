export type Product = {
  id: string;
  name: string;
  price: string;
  category: "pottery" | "textile" | "jewelry" | "wood";
  image: string;
  description: string;
};

export const products: Product[] = [
  { id: "woven-basket", name: "Woven basket", price: "$32", category: "textile", image: "/images/basket.jpg", description: "A hand-woven storage basket made from natural fibers, perfect for organizing any room." },
  { id: "ceramic-mug", name: "Ceramic mug", price: "$18", category: "pottery", image: "/images/mug.jpg", description: "A hand-thrown stoneware mug, glazed and fired individually — no two are exactly alike." },
  { id: "knit-scarf", name: "Knit scarf", price: "$24", category: "textile", image: "/images/scarf.jpg", description: "A soft, hand-knit scarf made from wool, warm enough for cold mornings." },
  { id: "clay-vase", name: "Clay vase", price: "$45", category: "pottery", image: "/images/vase.jpg", description: "A hand-shaped clay vase with a matte glaze finish, ideal for dried or fresh arrangements." },
  { id: "beaded-necklace", name: "Beaded necklace", price: "$28", category: "jewelry", image: "/images/necklace.jpg", description: "A delicate beaded necklace, hand-strung one bead at a time." },
  { id: "leather-journal", name: "Leather journal", price: "$36", category: "wood", image: "/images/journal.jpg", description: "A hand-bound journal with a leather cover, filled with recycled cotton paper." },
  { id: "wood-carving", name: "Wood carving", price: "$52", category: "wood", image: "/images/wood-carving.jpg", description: "A hand-carved decorative piece made from sustainably sourced wood." },
  { id: "soy-candle", name: "Soy candle", price: "$14", category: "wood", image: "/images/candle.jpg", description: "A hand-poured soy candle, scented with natural essential oils." },
  { id: "wool-blanket", name: "Wool blanket", price: "$68", category: "textile", image: "/images/blanket.jpg", description: "A hand-woven wool blanket, thick and warm, made on a traditional loom." },
];