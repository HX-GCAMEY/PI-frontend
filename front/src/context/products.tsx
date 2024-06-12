"use client";

import {createContext, useState, useEffect} from "react";
import {Product, ProductsContextType} from "./interfaces";
import {getData} from "@/helpers/dataFetch";

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
});

export const ProductsProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getData<Product[]>("http://localhost:5000/products");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
};
