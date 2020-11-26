import React from "react";
type PropsType={
    message:string
}
const DialogMessage:React.FC<PropsType> = ({message}) => <p>{message}</p>;

export default DialogMessage;
