"use client";

import {useContext} from "react";
import {UserContext} from "../../context/user";
import {CartContext} from "../../context/cart";

import CartItem from "@/components/cartItem";

function Checkout() {
  const {isLogged} = useContext(UserContext);
  const {cartItems, total, removeFromCart} = useContext(CartContext);

  return (
    <div className="flex flex-col align-middle m-5 w-4/5">
      {!isLogged ? (
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Checkout is only available for logged in users
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            You must be logged in to use the checkout page. If you do not have
            an account, you can create one by clicking the button below.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="/auth-page"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              LOGIN OR REGISTER
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
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
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Checkout;
