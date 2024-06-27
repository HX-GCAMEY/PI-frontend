import {Login, User} from "@/context/interfaces";
import {get} from "http";

export const postSignup = async (user: Omit<User, "id">) => {
  const response = await fetch("http://localhost:5000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

export const postSignin = async (credentials: Login) => {
  const response = await fetch("http://localhost:5000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data;
};

export const getUserOrders = async (token: string) => {
  const response = await fetch("http://localhost:5000/users/orders/", {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  return data;
};
