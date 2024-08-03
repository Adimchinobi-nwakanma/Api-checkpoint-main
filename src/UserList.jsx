import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data));
  });

  return (
    <div className="grid place-items-center w-full">
      <h1 className="font-extrabold text-2xl">NAMES OF USERS</h1>
      <ul className="space-y-1 w-full max-w-lg">
        {listOfUsers.map((item) => (
          <li
            key={item.id}
            className="h-12 shadow-md p-3 cursor-pointer hover:bg-amber-100 hover:shadow-orange-400"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
