"use client";

import React, {useContext} from "react";
import {UserContext} from "@/context/user";
import SignInAlert from "@/components/signInAlert";

function Dashboard() {
  const {isLogged, user} = useContext(UserContext);

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
