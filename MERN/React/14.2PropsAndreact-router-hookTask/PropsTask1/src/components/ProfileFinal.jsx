import React from "react";

const ProfileFinal = ({ user }) => {
  return (
    <div>
      <h5>Profile FInal</h5>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.password}</li>
        <li>{user.dob}</li>
        <li>{user.gender}</li>
      </ul>
    </div>
  );
};

export default ProfileFinal;
