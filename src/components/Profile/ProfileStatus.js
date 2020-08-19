import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => setEditMode(true);

  const deActivateEditMode = () => setEditMode(false);
  //props.updateStatus(this.state.status);

  return !editMode ? (
    <p onDoubleClick={activateEditMode}>some text</p>
  ) : (
    <input onBlur={deActivateEditMode} autoFocus={true} />
  );
};

export default ProfileStatusWithHooks;
