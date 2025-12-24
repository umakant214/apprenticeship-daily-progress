import React from "react";
import ProfileInfo from "./ProfileInfo";
const ProfileDetails = ({ user }) => {
  return (
    <>
      {/* <h5>ProfileDetails</h5> */}
      {/* <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.password}</li>
        <li>{user.dob}</li>
        <li>{user.gender}</li>
      </ul> */}
      <ProfileInfo user={user} />
    </>
  );
};

export default ProfileDetails;
