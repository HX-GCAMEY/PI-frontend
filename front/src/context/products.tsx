"use client";

import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [products, setProducts] = useState([]);
  const value = {products};

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await axios.get("http://localhost:5000/products");
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
