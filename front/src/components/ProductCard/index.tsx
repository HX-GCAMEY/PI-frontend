import {ProductCardProps} from "@/context/interfaces";
import React from "react";
import style from "./productCard.module.css";

function ProductCard({product}: ProductCardProps): JSX.Element {
  return (
    <div className={style.container}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>$ {product.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
