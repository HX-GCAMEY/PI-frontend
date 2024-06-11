"use client";

import React, {useContext} from "react";
import {UserContext} from "@/context/user";
import {useRouter} from "next/navigation";
import SignInAlert from "@/components/signInAlert";

function Dashboard() {
  const router = useRouter();
  const {isLogged, user} = useContext(UserContext);

  function redirect() {
    router.push("/auth-page");
  }

  return (
    <div className="h-full">
      {!isLogged ? (
        <SignInAlert />
      ) : (
        <div>
          <h1>Bienvenido</h1>
          <h2>{user?.user?.name}</h2>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
