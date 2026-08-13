export type Product = {
  id: number;
  seller_id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
};

export type Seller = {
  id: number;
  name: string;
  email: string;
};