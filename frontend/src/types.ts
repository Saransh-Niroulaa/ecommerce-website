export interface Product {
  id: number;
  name: string;
  description: string;
  price: string | number;
  category: string;
  stock: number;
  created_at?: string;
}

export interface CartItem extends Product {
  cartId: number;
}
