import React from 'react';

const Profile = (props) =>
<div>
<img src={props.profile.photos.small} alt="user avatar"/>
<p>{props.profile.aboutMe}</p>
<p>{props.profile.fullName}</p>
</div>

export default Profile;