"use client";
import {UserContext} from "@/context/user";
import {useContext, useEffect} from "react";
import SignInAlert from "@/components/signInAlert";
import OrderCard from "@/components/orderCard";

function Orders() {
  const {getOrders, orders, isLogged} = useContext(UserContext);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      {!isLogged ? (
        <SignInAlert />
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {orders.map((order) => {
            return (
              <div key={order.id}>
                <OrderCard order={order} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Orders;
