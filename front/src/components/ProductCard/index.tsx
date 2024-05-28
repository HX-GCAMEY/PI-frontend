import {ProductCardProps} from "@/context/interfaces";
import React from "react";
import style from "./productCard.module.css";
import Link from "next/link";

function ProductCard({product}: ProductCardProps): JSX.Element {
  return (
    <div className={style.container}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>$ {product.price}</p>
      <Link href={`/detail/${product.id}`}>
        <button>Details {">"} </button>
      </Link>
    </div>
  );
}

export default ProductCard;
