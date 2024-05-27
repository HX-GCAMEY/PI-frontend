interface Category {
  id: number;
  name: string;
}

interface Product {
  id: string;
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
  credential: Credential;
}

interface Order {
  id: number;
  status: string;
  date: string;
  user: User;
  products: Product[];
}

export type {Category, Product, Order, Login};
