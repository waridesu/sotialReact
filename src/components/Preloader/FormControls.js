import React from "react";
import s from "./FormControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.form_control + " " + (hasError ? s.error : null)}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea className={s.textarea} {...input} {...restProps } />
    </FormControl>
  );
}; 

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input className={s.input} {...input} {...restProps} />
    </FormControl>
  );
};
