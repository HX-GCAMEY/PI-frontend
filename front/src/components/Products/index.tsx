import {ProductsComponentProps, Product} from "@/context/interfaces";
import ProductCard from "@/components/ProductCard";

function Products({products}: ProductsComponentProps): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-4 grid-cols-1 p-10">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
