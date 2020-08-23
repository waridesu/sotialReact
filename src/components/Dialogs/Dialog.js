import React from "react";
import s from "./Dialog.module.css";
import DialogMasage from "./DialogMassage/DialogMasage";
import DialogName from "./DialogName/DialogName";
import AddMassageFormRedux from "./AddMassageForm";

const Dialog = (props) => {
  let dialogItem = props.dialog.companion.map((n) => (
    <DialogName id={n.id} name={n.name} src={n.src} />
  ));
  let massageitem = props.dialog.massages.map((m) => (
    <DialogMasage massege={m.massege} />
  ));
  let addingNewMassage=(values)=>{
    props.addMassage(values.newMassageText)
  }

  return (
    <div className={s.dialog_container}>
      <div className={s.name}>{dialogItem}</div>
      <div className={s.masseges}>
        <div className={s.massege_string}>{massageitem}</div>
        <AddMassageFormRedux onSubmit={addingNewMassage} />
      </div>
    </div>
  );
};

export default Dialog;
