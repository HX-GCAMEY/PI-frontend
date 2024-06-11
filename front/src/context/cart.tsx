"use client";
import {createContext, useState, useEffect} from "react";
import {Product} from "./interfaces";
import axios from "axios";

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: number) => void;
  removeFromCart: (product: number) => void;
  proceedToCheckout: (userId: number) => void;
  total: number;
}

const addItem = async (
  cartItems: Product[],
  product: number
): Promise<Product[]> => {
  const existingProduct = cartItems.find((item) => item.id === product);

  if (existingProduct) {
    return [...cartItems, existingProduct];
  }

  const {data} = await axios.get<Product>(
    `http://localhost:5000/products/${product}`
  );

  return [...cartItems, data];
};

const removeItem = (cartItems: Product[], product: number) => {
  return cartItems.filter((item) => item.id !== product);
};

const checkout = async (cartItems: Product[], userId: number) => {
  const products = cartItems.map((item) => item.id);

  try {
    const success = await axios.post("http://localhost:5000/orders", {
      products,
      userId,
    });
    console.log(success);
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
  const [cartItems, setCartItems] = useState([] as Product[]);
  const [total, setTotal] = useState(0);

  const addToCart = async (product: number) => {
    const updatedCart = await addItem(cartItems, product);

    setCartItems(updatedCart);
  };

  const removeFromCart = (product: number) => {
    console.log("click");
    setCartItems(removeItem(cartItems, product));
  };

  const proceedToCheckout = (userId: number) => {
    checkout(cartItems, userId);
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