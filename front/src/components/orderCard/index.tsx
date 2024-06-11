import {OrderProps} from "@/context/interfaces";
import {Card} from "flowbite-react";

function OrderCard({order}: OrderProps) {
  return (
    <Card className="max-w-sm p-5">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {new Date(order.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h5>
      <p>Status: {order.status}</p>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Products
      </h5>
      {order.products.map((product) => {
        return (
          <ul key={`${order.id}-${product.name}`}>
            <li className="flex justify-around ">
              <p>{product.name}</p>
              <p>${product.price}</p>
            </li>
          </ul>
        );
      })}
    </Card>
  );
}

export default OrderCard;
