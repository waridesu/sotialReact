import React from "react";
import s from "./Dialog.module.css";
import DialogMassage from "./DialogMassage/DialogMassage";
import DialogName from "./DialogName/DialogName";
import AddMassageFormRedux from "./AddMassageForm";


const Dialog = (props) => {
  let dialogItem = props.dialog.companion.map((n) => (
    <DialogName key={n.id} id={n.id} name={n.name} src={n.src} />
  ));
  let massageItem = props.dialog.massages.map((m,index) => (
    <DialogMassage key={index} massege={m.massage} />
  ));
  let addingNewMassage=(values)=>{
    props.addThenClean(values.newMassageText)
  }

  return (
    <div className={s.dialog_container}>
      <div>{dialogItem}</div>
      <div className={s.massages}>
        <div className={s.massage_string}>{massageItem}</div>
        <AddMassageFormRedux onSubmit={addingNewMassage} />
      </div>
    </div>
  );
};

export default Dialog;
