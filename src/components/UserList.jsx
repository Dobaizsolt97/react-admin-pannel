import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";
function UserList(props) {
  const { users, removeUser } = props;

  return (
    <div className="user-list">
      <h2>Lista utilizatorilor:</h2>
      {users.map((user, index) => {
        return (
          <UserItem
            id={user.id}
            name={user.name}
            email={user.email}
            isGoldClient={user.isGoldClient}
            key={index}
            salar={user.salar}
            link={user.link}
            removeUser={removeUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;
