"use client";
import UserCard from "../userCard";
import {UserContext} from "@/context/user";
import {useContext} from "react";

function UserProfile() {
  const {user} = useContext(UserContext);

  console.log(user);

  return (
    <div className="pr-10">
      <UserCard user={user?.user ?? null} />
    </div>
  );
}

export default UserProfile;
