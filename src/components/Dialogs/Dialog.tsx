import React from "react";
import s from "./Dialog.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";
import DialogName from "./DialogName/DialogName";
import AddMessageFormRedux from "./AddMessageForm";
import {initialStateType} from "../../redux/dialogReducer";
type PropsType={
    dialog: initialStateType
    resetAddMessage: (text: string)=>void
}
export type MessageType ={
    messageText: string
}
const Dialog: React.FC<PropsType> = ({dialog,resetAddMessage}) => {
  const dialogItem = dialog.companion.map((d) => (
    <DialogName key={d.id} id={d.id} name={d.name} src={d.src} />
  ));
  const messageItem = dialog.messages.map((m, index) => (
    <DialogMessage key={index} message={m.message} />
  ));
  const addingNewMessage=(values:MessageType)=>{
      resetAddMessage(values.messageText)
      console.log(values.messageText)
  }

  return (
    <div className={s.dialog_container}>
      <div>{dialogItem}</div>
      <div className={s.messages}>
        <div className={s.message_string}>{messageItem}</div>
        <AddMessageFormRedux onSubmit={addingNewMessage as any} />
      </div>
    </div>
  );
};

export default Dialog;
