import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => setEditMode(true);

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return !editMode ? (
    <p onDoubleClick={activateEditMode}>{props.status || "______"}</p>
  ) : (
    <input
      onChange={onStatusChange}
      onBlur={deActivateEditMode}
      autoFocus={true}
      value={status}
    />
  );
};

export default ProfileStatusWithHooks;
