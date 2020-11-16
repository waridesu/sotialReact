import React, {useState, useEffect, ChangeEvent} from "react";
type PropsType ={
  status: string
  updateStatus: (newStatus:string)=>void
}
type StateType ={
  editMode:boolean
  newStatus: string
  activateEditMode:()=>void
  onStatusChange:(e: ChangeEvent<HTMLInputElement>)=>void
  deActivateEditMode:()=>void
}
const ProfileStatusWithHooks: React.FC<PropsType>= ({status,updateStatus}): StateType=> {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newStatus, setNewStatus] = useState<string>(status);

  const activateEditMode = () => setEditMode(true);

  const deActivateEditMode = () => {
    setEditMode(false);
    updateStatus(newStatus);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setNewStatus(status);
  }, [status]);

  return !editMode ? (
    <p onDoubleClick={activateEditMode}>{status || "______"}</p>
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
