import React from "react";
import { UsersList } from "./UserCards.styled";
import { getUsers } from "../../redux/selectors";
import { useSelector } from "react-redux";

import UserItem from "../UserItem/UserItem";

const UserCard = () => {
  const users = useSelector(getUsers);

  return (
    <>
      <UsersList>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem {...user} />
          </li>
        ))}
      </UsersList>
    </>
  );
};

export default UserCard;
