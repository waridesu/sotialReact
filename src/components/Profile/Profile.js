import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus";

const Profile = (props) => (
  <div>
    <img src={props.profile.photos.small} alt="user avatar" />
    <p>{props.profile.aboutMe}</p>
    <ProfileStatusWithHooks />
    <p>{props.profile.fullName}</p>
  </div>
);

export default Profile;
