import React from "react";
import UserRow from "./UserRow";

function UserTable({ users, nationalities }) {
  return (
    <div className="user-table">
      {users.map((user, idx) => (
        <UserRow key={idx} user={user} nationalities={nationalities} />
      ))}
    </div>
  );
}

export default UserTable;