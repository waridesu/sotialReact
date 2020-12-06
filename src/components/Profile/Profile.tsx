import React from "react";
import ProfileStatusWithHooks from "./ProfileStatus";
import {profileType} from "../../redux/profileReducer";
interface PropsType {
    profile: profileType
    status: string | undefined
    updateStatus: (status:string| undefined)=>void
}
const Profile = ({profile, status, updateStatus}:PropsType) => (
  <div>
      <img
          src={
              profile.photos.small
                  ? profile.photos.small
                  : "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082"
          }
          alt="user avatar" height='100px' width='100px'
      />
      <p>{profile.aboutMe}</p>
      <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
      />
      <p>{profile.fullName}</p>
  </div>
);

export default Profile;
