import {ProductCardProps} from "@/context/interfaces";

function CartItem({product, remove}: ProductCardProps) {
  return (
    <div className="flex w-full border-gray-500 my-10 font-bold justify-around items-center px-10">
      <div className="w-1/3 flex justify-center items-center">
        <img className="h-32 mr-6" src={product.image} alt={product.name} />
        <span className="ml-3">{product.name}</span>
      </div>
      <div className="w-1/3 text-center">${product.price}</div>
      <div className="w-1/3 text-center">
        <button onClick={remove} className="ml-auto">
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
