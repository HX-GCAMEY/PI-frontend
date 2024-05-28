import Products from "@/components/products";
import {products} from "../../../public/data";

function Home() {
  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default Home;
