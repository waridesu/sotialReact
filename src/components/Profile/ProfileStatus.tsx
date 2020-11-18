import React, {useState, useEffect, ChangeEvent} from "react";
type PropsType ={
  status: string | undefined
  updateStatus: (status:string|undefined)=>void
}
const ProfileStatusWithHooks: React.FC<PropsType>= ({status,updateStatus})=> {
  const [editMode, setEditMode] = useState(false);
  const [hookStatus, setHookStatus] = useState<string| undefined>(status);

  const activateEditMode = () => setEditMode(true);

  const deActivateEditMode = () => {
    setEditMode(false);
    updateStatus(hookStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHookStatus(e.currentTarget.value);
  };

  useEffect(() => {
    updateStatus(hookStatus);
  }, [updateStatus,hookStatus]);

  return !editMode ? (
    <p onDoubleClick={activateEditMode}>{status || "-------"}</p>
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
