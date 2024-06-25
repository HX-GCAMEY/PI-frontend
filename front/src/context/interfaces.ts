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
  token: string;
}

interface UserContextType {
  user: Partial<UserResponse> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<UserResponse> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: Login) => Promise<boolean>;
  signUp: (user: Omit<User, "id">) => Promise<boolean>;
  getOrders: () => void;
  orders: OrderResponse[] | [];
  logOut: () => void;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: number) => void;
  removeFromCart: (product: number) => void;
  proceedToCheckout: (userId: number) => void;
  total: number;
}

interface ProductsContextType {
  products: Product[];
}

export type {
  ProductsContextType,
  UserContextType,
  CartContextType,
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
