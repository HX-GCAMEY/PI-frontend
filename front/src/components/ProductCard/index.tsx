import {ProductCardProps} from "@/context/interfaces";
import Link from "next/link";

function ProductCard({product}: ProductCardProps): JSX.Element {
  return (
    <Link
      href={`/detail/${product.id}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-full h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          $ {product.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
