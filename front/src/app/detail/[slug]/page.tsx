"use client";

import {useEffect, useState} from "react";
import {products} from "../../../../public/data";
import {Product} from "@/context/interfaces";

function Detail({params}: {params: any}): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const product: Product | undefined = products.find(
      (product) => product.id === Number(params.slug)
    );
    if (product) {
      setProduct(product);
    }
  });

  console.log(params);

  return (
    <div>
      <h1>{product?.name}</h1>
      <img src={product?.image} alt={product?.name} />
      <p>{product?.description}</p>
      <p>$ {product?.price}</p>
      <button>ADD TO CART</button>
    </div>
  );
}

export default Detail;
