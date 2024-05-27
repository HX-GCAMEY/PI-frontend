import {ProductsComponentProps, Product} from "@/context/interfaces";
import ProductCard from "../ProductCard";
import style from "./products.module.css";

function Products({products}: ProductsComponentProps): JSX.Element {
  return (
    <div className={style.container}>
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Products;
