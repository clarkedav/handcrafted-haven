export type Seller = {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  rating: number;
  reviewCount: number;
  products: { name: string; price: string; image: string }[];
};

export const sellers: Record<string, Seller> = {
  maren: {
    id: "maren",
    name: "Maren's Pottery Studio",
    tagline: "Handmade stoneware · Portland, OR · Est. 2019",
    bio: "Every piece is thrown by hand and fired in a small backyard kiln, inspired by coastal textures and tides.",
    rating: 4.8,
    reviewCount: 126,
    products: [
      { name: "Stoneware bowl", price: "$38", image: "/images/stoneware-bowl.jpg" },
      { name: "Glazed mug set", price: "$46", image: "/images/mug-set.jpg" },
      { name: "Ceramic vase", price: "$54", image: "/images/vase.jpg" },
      { name: "Trinket dish", price: "$16", image: "/images/trinket-dish.jpg" },
    ],
  },
};