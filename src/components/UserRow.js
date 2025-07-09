import React from "react";
import CountryFlag from "react-country-flag";

function UserRow({ user, nationalities }) {
  const flagUrl = user.nat
    ? `https://flagcdn.com/24x18/${user.nat.toLowerCase()}.png`
    : "";

  return (
    <div className="user-row">
      <div className="user-row-left">
        <img className="avatar" src={user.picture.thumbnail} alt={user.name.first} />
        <div className="user-info">
          <div className="user-name">{user.name.first} {user.name.last}</div>
          <div className="user-email">{user.email}</div>
        </div>
      </div>
      <div className="user-row-right">
        <div className="user-age">{user.dob.age}</div>
        <div className={`user-gender ${user.gender}`}>{user.gender}</div>
        <CountryFlag countryCode={user.nat} svg className="user-flag" title={nationalities[user.nat?.toLowerCase()]} />
        <div className="user-address">
          {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.country}
        </div>
      </div>
    </div>
  );
}

export default UserRow;