import React from "react";
type PropsType={
    message:string
}
const DialogMessage = ({message}:PropsType) => <p>{message}</p>;

export default DialogMessage;
