
import Products from "@/components/Products";
import {fetchProducts} from "@/lib/server/fetchProducts";


async function Home() {
  const products = await fetchProducts();

  return (
    <div className=" overflow-auto">
      <Products products={products} />
    </div>
  );
}

export default Home;
