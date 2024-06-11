"use client";

import {createContext, useState, useEffect} from "react";
import {Login, User} from "./interfaces";
import axios from "axios";

interface UserContextType {
  user: Partial<User> | null;
  setUser: (user: Partial<User>) => void;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: Login) => Promise<boolean>;
  signUp: (user: Omit<User, "id">) => Promise<boolean>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
  signIn: async () => false,
  signUp: async () => false,
});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<Partial<User> | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  const signIn = async (credentials: Login) => {
    try {
      const {data} = await axios.post(
        "http://localhost:5000/users/login",
        credentials
      );

      setUser(data);
      localStorage.setItem("token", data.token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signUp = async (user: Omit<User, "id">) => {
    try {
      const {data} = await axios.post(
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

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("token");
      return;
    }

    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsLogged(true);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{user, setUser, isLogged, setIsLogged, signIn, signUp}}
    >
      {children}
    </UserContext.Provider>
  );
};
