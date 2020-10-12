import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus";

const Profile = props => (
  <div>
      <img
          src={
              props.profile.photos.small
                  ? props.profile.photos.small
                  : "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082"
          }
          alt="user avatar" height='100px' width='100px'
      />
      <p>{props.profile.aboutMe}</p>
      <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
      />
      <p>{props.profile.fullName}</p>
  </div>
);

export default Profile;
