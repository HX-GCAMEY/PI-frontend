"use client";
import {createContext, useState, useEffect} from "react";
import {Product, CartContextType} from "./interfaces";

import {fetchProductById} from "@/lib/server/fetchProducts";

const addItem = async (
  cartItems: Product[],
  product: number
): Promise<Product[]> => {
  const existingProduct = cartItems.find((item) => item.id === product);

  if (existingProduct) {
    return [...cartItems, existingProduct];
  }

  const data = await fetchProductById(product.toString());

  return [...cartItems, data];
};

const removeItem = (cartItems: Product[], product: number) => {
  return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
});

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const addToCart = async (product: number) => {
    const updatedCart = await addItem(cartItems, product);
    setCartItems(updatedCart);
  };

  const removeFromCart = (product: number) => {
    setCartItems(removeItem(cartItems, product));
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, total}}>
      {children}
    </CartContext.Provider>
  );
};
