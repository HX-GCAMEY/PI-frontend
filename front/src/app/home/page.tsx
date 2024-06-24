import fetchProducts from "@/lib/server/productsFetch";
import Products from "@/components/Products";

async function Home() {
  const products = await fetchProducts();

  return (
    <div className=" overflow-auto">
      <Products products={products} />
    </div>
  );
}

export default Home;
