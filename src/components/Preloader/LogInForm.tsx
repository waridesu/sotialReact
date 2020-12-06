import React from "react";
import s from "./Preloader.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "./FormControls";
import {requiredField} from "../../utils/Validator";
import {loginFormValuesType, loginFormValuesTypeKeys} from "./AuthDirect";


const LogInForm = ({handleSubmit, error}: InjectedFormProps<loginFormValuesType&{/*ownProps*/}>&{/*ownProps*/}) => (
    <form onSubmit={handleSubmit} className={s.auth_form}>
        <div className={s.auth_field}>
            <div>
                {createField<loginFormValuesTypeKeys>("waridesu@gmail.com", "email", Input, [requiredField])}
                {createField<loginFormValuesTypeKeys>("password", "password", Input, [requiredField], "password")}
                {error && <div className={s.sumError}>{error}</div>}
            </div>
        </div>
        <label>
            {createField<loginFormValuesTypeKeys>(undefined, "rememberMe", Input, [], "checkbox")}
            remember
        </label>
        <button>login</button>
    </form>
);

const LogInReduxForm = reduxForm<loginFormValuesType,{/*ownProps*/}>({
    form: "LogIn",
})(LogInForm);

export default LogInReduxForm;
