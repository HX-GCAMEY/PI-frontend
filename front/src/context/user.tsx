"use client";

import {createContext, useState, useEffect} from "react";
import {Login, OrderResponse, User, UserResponse} from "./interfaces";
import {getData, postData} from "@/helpers/dataFetch";
import axios from "axios";
import {UserContextType} from "./interfaces";

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  signIn: async () => false,
  signUp: async () => false,
  getOrders: async () => {},
  orders: [],
  logOut: () => {},
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<Partial<UserResponse> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState<OrderResponse[]>([]);

  const signIn = async (credentials: Login) => {
    try {
      const data = await postData<UserResponse, Login>(
        "http://localhost:5000/users/login",
        credentials
      );

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signUp = async (user: Omit<User, "id">) => {
    try {
      const data = await postData<User, Omit<User, "id">>(
        "http://localhost:5000/users/register",
        user
      );

      if (data.id) {
        signIn({email: user.email, password: user.password});
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getOrders = async () => {
    try {
      const data = await getData<OrderResponse[]>(
        "http://localhost:5000/users/orders/"
      );

      setOrders(data);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsLogged(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;
      setIsLogged(true);
    }
  }, [user]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      return;
    }
    setUser(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        signIn,
        signUp,
        getOrders,
        orders,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
