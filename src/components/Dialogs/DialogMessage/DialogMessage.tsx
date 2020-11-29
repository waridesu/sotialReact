import React from "react";
type PropsType={
    message:string|null
}
const DialogMessage = ({message}:PropsType) => <p>{message}</p>;

export default DialogMessage;
