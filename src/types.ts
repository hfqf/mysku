export type Category = 'Material Handling' | 'Shipping & Packaging' | 'Medical & Spa' | 'Food Service' | 'Industrial';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  unit: string;
  stock: number;
  specs?: { [key: string]: string };
  reviews?: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}
