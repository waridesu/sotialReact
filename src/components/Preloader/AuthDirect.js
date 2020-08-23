import React from "react";
import LogInReduxForm from "./LogInForm";

const AuthDirect = props =>{
const onSubmit= formData=>{
    console.log(formData)
}
return <LogInReduxForm onSubmit={onSubmit}/>

}
export default AuthDirect;
