"use client";

import Products from "@/components/Products";
import {ProductsContext} from "@/context/products";
import {useContext} from "react";

function Home() {
  const {products} = useContext(ProductsContext);

  return (
    <div className=" overflow-auto">
      <Products products={products} />
    </div>
  );
}

export default Home;
