"use client";
import {useContext} from "react";
import {CartContext} from "@/context/cart";
import CartItem from "../cartItem";

function CartComponent() {
  const {cartItems, removeFromCart, total} = useContext(CartContext);

  return (
    <div className="flex flex-col text-center justify-between w-full">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <CartItem product={item} remove={() => removeFromCart(item.id)} />
          </div>
        ))
      ) : (
        <div className="text-2xl font-bold pt-8">No items in cart</div>
      )}
      {total > 0 && (
        <div className="w-full flex justify-end items-center text-2xl font-bold pt-5 border-t-2 border-gray-500">
          <p className="align-middle">TOTAL: {total}</p>
          <button className="bg-blue-500 text-white ml-4 rounded-lg p-3 ">
            PURCHASE
          </button>
        </div>
      )}
    </div>
  );
}

export default CartComponent;
