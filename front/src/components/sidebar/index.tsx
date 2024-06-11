"use client";

import {Sidebar} from "flowbite-react";
import Link from "next/link";
import {HiUser, HiShoppingBag, HiLogout} from "react-icons/hi";
import {UserContext} from "@/context/user";
import {useContext} from "react";

function DashboardSidebar() {
  const {logOut} = useContext(UserContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <Sidebar
      aria-label="Default sidebar example"
      className=" h-full w-64 bg-gray-800 text-white flex flex-col justify-between shadow-lg z-50"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            href="/user-dashboard/profile"
            icon={HiUser}
            className="text-xl font-semibold my-4"
          >
            Profile
          </Sidebar.Item>

          <Sidebar.Item
            as={Link}
            icon={HiShoppingBag}
            href="/user-dashboard/orders"
            className="text-xl font-semibold my-4"
          >
            Orders
          </Sidebar.Item>
          <Sidebar.Item
            as={Link}
            icon={HiLogout}
            onClick={handleLogout}
            href="/"
            className="text-xl font-semibold my-4"
          >
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashboardSidebar;
