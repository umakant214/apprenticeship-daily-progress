import React from "react";
import ProfileFinal from "./ProfileFinal";

const ProfileInfo = ({ user }) => {
  return (
    <>
      {/* <h5>ProfileInfo</h5> */}
      {/* <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.password}</li>
        <li>{user.dob}</li>
        <li>{user.gender}</li>
      </ul> */}

      <ProfileFinal user={user} />
    </>
  );
};

export default ProfileInfo;
