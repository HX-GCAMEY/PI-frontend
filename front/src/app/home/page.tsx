import Products from "@/components/products";
import {products} from "../../../public/data";

function Home() {
  return (
    <div className=" overflow-auto">
      <Products products={products} />
    </div>
  );
}

export default Home;
