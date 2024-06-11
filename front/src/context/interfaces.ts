interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

interface Login {
  email: string;
  password: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  orders?: OrderResponse[];
}

interface CreateOrder {
  userId: number;
  products: number[];
}

interface OrderResponse {
  id: number;
  status: string;
  date: string;
  user: User;
  products: Product[];
}

interface ProductCardProps {
  product: Product;
  remove?: () => void;
}

interface OrderProps {
  order: OrderResponse;
}

interface ProductsComponentProps {
  products: Product[];
}

interface UserResponse {
  login: boolean;
  user: Partial<User> | null;
  token: string | null;
}

export type {
  Category,
  Product,
  OrderResponse,
  OrderProps,
  CreateOrder,
  UserResponse,
  Login,
  ProductCardProps,
  User,
  ProductsComponentProps,
};
