import ProfileDetails from "./ProfileDetails";
import ProfileInfo from "./ProfileInfo";

const Profile = ({ user }) => {
  return (
    <>
      {/* <h5>Profile</h5> */}
      {/* <ul>
        <li> {user.name}</li>
        <li>{user.email}</li>
        <li> {user.password}</li>
        <li> {user.dob}</li>
        <li>{user.gender}</li>
      </ul> */}

      <ProfileDetails user={user} />
    </>
  );
};

export default Profile;
