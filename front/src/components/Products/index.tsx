import {ProductsComponentProps, Product} from "@/context/interfaces";
import ProductCard from "../productCard";
import style from "./products.module.css";

function Products({products}: ProductsComponentProps): JSX.Element {
  return (
    <div className={style.container}>
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
