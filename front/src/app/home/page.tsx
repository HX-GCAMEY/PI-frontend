import Products from "@/components/Products";
import {products} from "../../../public/data";

function Home() {
  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default Home;
