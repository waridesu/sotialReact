import React from "react";
interface PropsType{
    message:string|null
}
const DialogMessage = ({message}:PropsType) => <p>{message}</p>;

export default DialogMessage;
