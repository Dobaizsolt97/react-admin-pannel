import React from "react";
import "./UserItem.css";

function UserItem(props) {
  const {
    id,
    removeUser,
    name,
    email,
    isGoldClient,
    salar = 250,
    link = "https://via.placeholder.com/150",
  } = props;

  return (
    <div className="user-item">
      <div className="user-item-image">
        <img src={link} alt="placeholder"></img>
      </div>

      <div className="user-item-text">
        <h3>Nume: {name}</h3>
        <p>Email: {email}</p>
        {isGoldClient ? <h3>Client GOLD</h3> : null}
        <p>{`Salar: ${salar}`}</p>
        <button onClick={() => removeUser(id)}>Sterge utilizatorul</button>
      </div>
    </div>
  );
}

export default UserItem;
