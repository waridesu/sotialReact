import React from "react";
import s from "./Dialog.module.css";
import DialogMessage from "./DialogMessage/DialogMessage";
import DialogName from "./DialogName/DialogName";
import AddMessageFormRedux from "./AddMessageForm";
import {initialStateType} from "../../redux/dialogReducer";

interface PropsType {
    dialog: initialStateType
    sendMessage: (text: string|null) => void
}
export interface newMessageType {
    payload: string|null
}

const Dialog = ({dialog, sendMessage}: PropsType) => {
    const dialogItem = dialog.companion.map((d) => (
        <DialogName key={d.id} id={d.id} name={d.name} src={d.src}/>
    ));
    const messageItem = dialog.messages.map((m, index) => (
        <DialogMessage key={index} message={m.message}/>
    ));
    const handleSubmit = (values: newMessageType) => {
        sendMessage(values.payload)
        values.payload = null
    }

    return (
        <div className={s.dialog_container}>
            <div>{dialogItem}</div>
            <div className={s.messages}>
                <div className={s.message_string}>{messageItem}</div>
                <AddMessageFormRedux onSubmit={handleSubmit}/>
            </div>
        </div>
    );
};

export default Dialog;
