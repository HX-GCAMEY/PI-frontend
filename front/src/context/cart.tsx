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

const checkout = async (cartItems: Product[]) => {
  try {
    const products = cartItems.map((item) => item.id);
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({products}),
    });

    if (response.ok) {
      console.log("success");
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
  proceedToCheckout: () => {},
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

  const proceedToCheckout = () => {
    checkout(cartItems);
    setCartItems([]);
  };

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, total, proceedToCheckout}}
    >
      {children}
    </CartContext.Provider>
  );
};
