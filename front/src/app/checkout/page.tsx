"use client";

import {useContext} from "react";
import {UserContext} from "../../context/user";
import {CartContext} from "../../context/cart";

import CartItem from "@/components/cartItem";
import SignInAlert from "@/components/signInAlert";

function Checkout() {
  const {isLogged, user} = useContext(UserContext);
  const {cartItems, total, removeFromCart, proceedToCheckout} =
    useContext(CartContext);

  return (
    <div className="flex flex-col align-middle m-5 w-4/5">
      {!isLogged ? (
        <SignInAlert />
      ) : (
        <>
          <div className="flex w-full justify-around border-b-solid border-b-2 border-b-gray-500 text-center p-10">
            <div className="w-1/3 ">
              <span>PRODUCT</span>
            </div>
            <div className="w-1/3 ">
              <span>PRICE</span>
            </div>
            <div className="w-1/3 ">
              <span>REMOVE</span>
            </div>
          </div>

          {cartItems.length < 1 ? (
            <div className=" text-center mt-9 text-2xl font-bold">
              YOUR CART IS EMPTY
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <CartItem
                  product={item}
                  remove={() => removeFromCart(item.id)}
                />
              </div>
            ))
          )}
          {total > 0 && (
            <div className="flex justify-end text-2xl font-bold pt-8 pr-36 border-t-2 border-gray-500">
              TOTAL: {total}
              <button
                onClick={() => proceedToCheckout(user?.user?.id || 0)}
                className="bg-blue-500 text-white rounded-lg p-2 mt-4"
              >
                PURCHASE
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;
