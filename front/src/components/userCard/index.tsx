import {User} from "@/context/interfaces";
import {Card, Avatar} from "flowbite-react";

function UserCard({user}: {user: Partial<User> | null}) {
  return (
    <Card className="max-w-m">
      <div className="flex flex-col items-center pb-10">
        <div className="flex flex-wrap gap-2 m-11">
          <Avatar size="xl" rounded />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user?.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {user?.email}
        </span>
        <p>{user?.address}</p>
        <p>{user?.phone}</p>
      </div>
    </Card>
  );
}

export default UserCard;
