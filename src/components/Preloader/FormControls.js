import React from "react";
import s from "./FormControls.module.css";
import {Field} from "redux-form";

const FormControl = ({ input, meta:{touched,error}, children }) => {
  const hasError = touched && error;
  return (
    <div className={s.form_control + " " + (hasError ? s.error : null)}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
    const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea className={s.textarea} {...input} {...restProps } />
    </FormControl>
  );
}; 

export const Input = (props) => {
    const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input className={s.input} {...input} {...restProps} />
    </FormControl>
  );
};
export const createField =(placeholder,name, components, valid, type)=>
    <Field
        placeholder={placeholder}
        name={name}
        type={type}
        component={components}
        validate={valid}
    />
