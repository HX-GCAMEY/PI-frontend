import {Product} from "@/context/interfaces";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://pi-frontend-1.onrender.com/products");
  const products = await response.json();
  return products;
}

export async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(
    `https://pi-frontend-1.onrender.com/products/${id}`
  );
  const product = await response.json();
  return product;
}
