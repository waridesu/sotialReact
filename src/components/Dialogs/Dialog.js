import React from "react";
import s from "./Dialog.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";
import DialogName from "./DialogName/DialogName";
import AddMessageFormRedux from "./AddMessageForm";


const Dialog = (props) => {
  let dialogItem = props.dialog.companion.map((n) => (
    <DialogName key={n.id} id={n.id} name={n.name} src={n.src} />
  ));
  const messageItem = props.dialog.messages.map((m, index) => (
    <DialogMessage key={index} message={m.message} />
  ));
  let addingNewMessage=(values)=>{
    props.addThenClean(values.newMessageText)
  }

  return (
    <div className={s.dialog_container}>
      <div>{dialogItem}</div>
      <div className={s.messages}>
        <div className={s.message_string}>{messageItem}</div>
        <AddMessageFormRedux onSubmit={addingNewMessage} />
      </div>
    </div>
  );
};

export default Dialog;
